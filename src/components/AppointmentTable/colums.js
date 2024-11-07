"use client"

import { ColumnDef } from "@tanstack/react-table"



export const columns = [
    {
        accessorKey: "doctor", // jo data hai uske against object jo hai uski key ka jo name hai appointment data mai 
        header: "Doctor Name",
    },
    {
        accessorKey: "user",
        header: "Patient",
    },
    {
        accessorKey: "appointmentDate",
        header: "Appointment Date",
    },{
        accessorKey: "appointmentTime",
        header: "Appointment Time",
    },{
        accessorKey: "status",
        header: "Status",
    },
]
