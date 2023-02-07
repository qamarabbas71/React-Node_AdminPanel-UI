import axios from 'axios'
import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'

const Table = () => {
    const [data, setData] = useState([])

    const fetchData = async() => {
        try {
           const response = await axios.get('https://reqres.in/api/users?page=2')
           setData(response.data.data)
        } catch (error) {
            console.log(" your error is" + error)
        }
    }
    const columss = [
        {
            name: "ID",
            selector:(row) => row.id
        },
        {
            name: "First Name",
            selector: (row) => row.first_name
        },
        {
            name: "Last Name",
            selector: (row) => row.last_name
        },
        {
            name: "Email",
            selector: row => row.email
        },
        {
            name: "Avatar",
            selector: row => <img src={row.avatar} alt="" style={{height:"40px",width:"40px",borderRadius:"10px"}}/>
        },
    ]

    useEffect(()=>{
        fetchData()
    }, [])
  return (
    <div className='w-100 '>
        <DataTable responsive columns={columss} data={data} pagination className='shadow p-3 mb-5 bg-body rounded me-5'/>
    </div>
  )
}

export default Table