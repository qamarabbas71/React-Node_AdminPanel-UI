import React, { useEffect, useState } from 'react'
import axios from "axios";

const OrderTable = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
      const fetchProducts = async () => {
        try {
          await axios
            .get("http://localhost:3001/api/product/singleUserProduct",{
              withCredentials: true,
            })
            .then((res) => {
              setData(res.data.data);
              // console.log(res)
            });
        } catch (error) {
          console.log(error);
        }
      };
      fetchProducts();
    }, []);
  return (
    <div>
         {/* Card Start */}
         <div className="bg-white shadow-sm p-3 bg-body-tertiary rounded m-3 ">
            {/* Card body Start */}
            <div className="card-body">
              {/* Card Nav Start */}
              <div className="d-flex justify-content-between align-items-center p-1 w-100">
                <div className="d-flex justify-content-between align-items-center text-muted">
                  <h3>Your Orders</h3>
                </div>
                <div>
                  {/* <Link to="">
                    <button className="btn btn-primary">Add Product</button>
                  </Link> */}
                </div>
              </div>
              {/* Card Nav End */}
              {/* Card Table Start */}
              <table className="table p-3 my-4">
                <thead>
                  <tr>
                    <th scope="col">P-ID</th>
                    <th scope="col">Product</th>
                    <th scope="col">Customer Name</th>
                    <th scope="col">C-Phone</th>
                    <th scope="col">C-Address</th>
                    <th scope="col">Status</th>
                    <th scope="col">Price</th>
                  </tr>
                </thead>
                <tbody className="justify-content-between align-items-center">
                  {data.map((d, index)=>{
                    return(
                      <tr className="border align-items-center py-3" key={index}>
                      <td className="align-items-center py-3"><span>{d.p_id}</span></td>
                      <td>
                      <span className="d-flex align-items-center gap-2">
                              <img
                                src={`http://localhost:3001/product/${d.p_image}`}
                                alt=""
                                style={{
                                  height: "40px",
                                  width: "40px",
                                  borderRadius: "7px",
                                }}
                                className="d-flex align-items-center"
                              />
                              <span>{d.p_name}</span>
                            </span>
                      </td>
                      <td className="align-items-center py-3"><span>{d.name}</span></td>
                      <td className="align-items-center py-3"><span>{d.phone}</span></td>
                      <td className="align-items-center py-3"><span>{d.address}</span></td>
                      <td className="align-items-center py-3">
                          {d.p_status === "Deliever" ? (
                            <span className="badge bg-success">
                              {d.p_status}
                            </span>
                          ) : (
                            <span className="badge bg-warning">
                              {d.p_status}
                            </span>
                          )}
                        </td>
                        <td className="align-items-center py-3">
                          <span>
                            {d.p_price_unit} {d.p_price}
                          </span>
                        </td>
                    </tr>
                    );
                  })}
                </tbody>
              </table>
              {/* Card Table End */}
            </div>
            {/* Card body end */}
          </div>
          {/* Card End */}
    </div>
  )
}

export default OrderTable