import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { createTheme } from "react-data-table-component";



const Empoleyee = () => {
  const columns = [
    {
      name: "Name",
      selector: (row) => row.Name,
    },
    {
      name: "Position",
      selector: (row) => row.Position,
    },
    {
      name: "Iqama",
      selector: (row) => row.Iqama,
    },
    {
      name: "Mobile",
      selector: (row) => row.Mobile,
    },
    {
      name: "Nationality",
      selector: (row) => row.Nationality,
    },
  ];

  const data = [
    {
      id: 1,
      Name: "prem",
      Position: "Font-End",
      Iqama: "1988",
      Mobile: "1586",
      Nationality: "Saudi-Arabia",
    },
    {
      id: 1,
      Name: "prem",
      Position: "Font-End",
      Iqama: "1988",
      Mobile: "1586",
      Nationality: "Saudi-Arabia",
    },
    {
      id: 1,
      Name: "prem",
      Position: "Font-End",
      Iqama: "1988",
      Mobile: "1586",
      Nationality: "Saudi-Arabia",
    },
    {
      id: 1,
      Name: "prem",
      Position: "Font-End",
      Iqama: "1988",
      Mobile: "051488",
      Nationality: "Saudi-Arabia",
    },
    {
      id: 1,
      Name: "prem",
      Position: "Font-End",
      Iqama: "1988",
      Mobile: "051488",
      Nationality: "Saudi-Arabia",
    },
    {
      id: 1,
      Name: "prem",
      Position: "Font-End",
      Iqama: "1988",
      Mobile: "051488",
      Nationality: "Saudi-Arabia",
    },
    {
      id: 1,
      Name: "Beetlejuice",
      Position: "Font-End",
      Iqama: "1988",
      Mobile: "051488",
      Nationality: "Saudi-Arabia",
    },
    {
      id: 1,
      Name: "Beetlejuice",
      Position: "Font-End",
      Iqama: "1988",
      Mobile: "051488",
      Nationality: "Saudi-Arabia",
    },
    {
      id: 1,
      Name: "Beetlejuice",
      Position: "Font-End",
      Iqama: "1988",
      Mobile: "051488",
      Nationality: "Saudi-Arabia",
    },
    {
      id: 1,
      Name: "Beetlejuice",
      Position: "Font-End",
      Iqama: "1988",
      Mobile: "051488",
      Nationality: "Saudi-Arabia",
    },
    {
      id: 1,
      Name: "Beetlejuice",
      Position: "Font-End",
      Iqama: "1988",
      Mobile: "051488",
      Nationality: "Saudi-Arabia",
    },
    {
      id: 1,
      Name: "Beetlejuice",
      Position: "Font-End",
      Iqama: "1988",
      Mobile: "051488",
      Nationality: "Saudi-Arabia",
    },
    {
      id: 1,
      Name: "Beetlejuice",
      Position: "Font-End",
      Iqama: "1988",
      Mobile: "051488",
      Nationality: "Saudi-Arabia",
    },
    {
      id: 1,
      Name: "Beetlejuice",
      Position: "Font-End",
      Iqama: "1988",
      Mobile: "051488",
      Nationality: "Saudi-Arabia",
    },
    {
      id: 1,
      Name: "Beetlejuice",
      Position: "Font-End",
      Iqama: "1988",
      Mobile: "051488",
      Nationality: "Saudi-Arabia",
    },
    {
      id: 1,
      Name: "Beetlejuice",
      Position: "Font-End",
      Iqama: "1988",
      Mobile: "1586",
      Nationality: "Saudi-Arabia",
    },
  ];
  const customStyles = {
    rows: {
      style: {
        minHeight: "35px", // override the row height
      },
    },
    headCells: {
      style: {
        paddingLeft: "8px", // override the cell padding for head cells
        paddingRight: "8px",
      },
    },
    cells: {
      style: {
        paddingLeft: "8px", // override the cell padding for data cells
        paddingRight: "8px",
      },
    },
  };
  createTheme('solarized', {
    text: {
      primary: '#268bd2',
      secondary: '#2aa198',
    },
    background: {
      default: '#002b36',
    },
    context: {
      background: '#cb4b16',
      text: '#FFFFFF',
    },
    divider: {
      default: '#073642',
    },
    action: {
      button: 'rgba(0,0,0,.54)',
      hover: 'rgba(0,0,0,.08)',
      disabled: 'rgba(0,0,0,.12)',
    },
  }, 'dark');

  const [records, setRecords] = useState(data);
  const [loading, setLoading] = useState(true);
  function handleinput(event) {
    const newData = data.filter((row) => {
      return row.Name.toLowerCase().includes(event.target.value.toLowerCase());
    });
    setRecords(newData);
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timeout);
  }, []);
  return (
    <>
      <div className="bg-[#002b36]">
      <div className="w-10/12 m-auto">
        <div className="sm:block md:flex Lg:flex justify-between   pt-2">
          <h4 className=" text-white">Our Empoleyee List...🤵</h4>
          <input
            type="text"
            onChange={handleinput}
            placeholder="search"
            className="text-center py-2 px-4 border-white border-2 rounded-lg outline-0 bg-[#002b36] text-white "
          />
        </div>
        <DataTable
          theme="solarized"
          columns={columns}
          data={records}
          customStyles={customStyles}
          pagination
          progressPending={loading}
          
        />
      </div>
      </div>
    </>
  );
};

export default Empoleyee;
