import Swal from 'sweetalert2'

import { createContext, useContext, useState } from "react";
import { createMedicamento,getMedicamentos,deleteMedicamento,getMedicamento,updateMedicamento } from "../api/medicamentos";

const MedicamentoContext = createContext();

export const useMedicamento = () => {
    const context = useContext(MedicamentoContext);

    if(!context){
        throw new Error("No context")
    }
    return context;
};

export function MedicamentoProvider({children}){
    const [medicamentos,setMedicamentos]=useState([]);

    const mostrarMedicamentos = async() =>{
        try {
            const res = await getMedicamentos();
            setMedicamentos(res.data);
            // console.log(mendicamentos);
        } catch (error) {
            alert(error);
        }
    }
    const createMedicamentos = async (medicamento) => {
        try {
            const res = await createMedicamento(medicamento);
          
              await Swal.fire({
                title: "Success!",
                text: "Medication created successfully!",
                icon: "success"
              }).then(() => {
                window.location.href = '/datatable';
              });
          } catch (error) {
            console.error("Error creating medication:", error);
            await Swal.fire({
              title: "Error!",
              text: "An error occurred while creating medication.",
              icon: "error"
            }).then(() => {
                window.location.href = '/datatable';
          })
        }
    }
    const deleteM = async (id) => {
        
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then(async (result) => {
            if (result.isConfirmed) {
              try {
                await deleteMedicamento(id);
                Swal.fire({
                  title: "Deleted!",
                  text: "Your medication has been deleted.",
                  icon: "success"
                });
                mostrarMedicamentos();
              } catch (error) {
                console.error("Error deleting medication:", error);
                Swal.fire({
                  title: "Error!",
                  text: "An error occurred while deleting medication.",
                  icon: "error"
                });
              }
            }
          });
        
    }

    const getMedicamentoId = async (id) => {
        try {
            const res = await getMedicamento(id); 

            return res.data; 
        } catch (error) {
            console.log(error);
        }  
    }
    const updateM = async (id, medicamento) => {
        try {
            // Swal.fire({
            //   position: "top-end",
            //   icon: "success",
            //   title: "Your work has been saved",
            //   showConfirmButton: false,
            //   timer: 1500,
            //   didDestroy: () => {
            //     // Esta función se ejecutará después de que la animación haya terminado
            //     window.location.href = '/datatable';
            //   }
            // });
          
            await updateMedicamento(id, medicamento);
          } catch (error) {
            console.log(error);
          }
    }


    return (
        <MedicamentoContext.Provider value={{
            medicamentos,
            createMedicamentos,
            mostrarMedicamentos,
            deleteM,
            getMedicamentoId,
            updateM,
        }}>
            {children}
        </MedicamentoContext.Provider>
    );
}