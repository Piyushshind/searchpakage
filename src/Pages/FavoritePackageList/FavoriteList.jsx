import React from 'react'
import { useRecoilState } from 'recoil';
import CustomButton from '../../Componants/Atoms/MyButton/CustomButton';
import { packagedata } from '../../Data/Recoil';

const FavoriteList = () => {
  const [cartData,setCartData] = useRecoilState(packagedata);
   
    

    function handleDelete(id){
      setCartData(cartData.filter((packages)=>{
        return packages.id !== id
      }))
  }
  return (
    <>
     <table border='1'>
      <tr>
     <th>Sr No.</th>
     <th>Package</th>
     <th>Details</th>
     <th>Delete</th>
     </tr>

     {cartData.map((item)=>{
      return(
        <tr key={item.id}>
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td>{item.discribtion}</td>
          <td><CustomButton btnText='Delete' onClick={()=>handleDelete(item.id)}/></td>
        </tr>
      )
     })}
     </table>
    </>
  )
}

export default FavoriteList