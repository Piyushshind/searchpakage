import React, { useState } from 'react'
import styles from './IndexPage.module.css';
import CustomInput from '../../Componants/Atoms/MyInput/CustomInput'
import CustomButton from '../../Componants/Atoms/MyButton/CustomButton'
import { PackageData } from '../../Data/PakcageData';

const IndexPage = () => {
  const [data,setData] = useState(PackageData);
  const [searchInput,setSearchInput] = useState('');
  
  function handleInput(e){
  setSearchInput(e.target.value)
   const searchData = data.filter((packages)=> {
    return packages.name.toLowerCase().startsWith(searchInput.toLowerCase())
   })
   setData(searchData)
  }
  
  function handleDelete(id){
      setData(data.filter((packages)=>{
        return packages.id !== id
      }))
  }
  return (
    <>
      <div className={styles.mainDiv} >
        <div className={styles.searchBardiv}>
          <h2>Search for npm package</h2>
          <CustomInput className={styles.SearchInput} onChange={handleInput} value={searchInput}/>
        </div>
         <div className={styles.package_list_div}>
          <table border='1'>
            <tr>
              <th>Sr.No</th>
              <th> Package </th>
              <th> Dicription </th>
              <th> Favorite </th>
              <th> Delete </th>
            </tr>
           {data.map((item) =>{
            return (
           
           
            
             <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.discribtion}</td>
              <td> <CustomButton btnText='Favorite'/></td>
              <td><CustomButton btnText='Delete' onClick={()=>handleDelete(item.id)}/></td>
             </tr>
            
            )}
            )}

          </table>
           
         </div>
      </div>
    </>
  )
}

export default IndexPage