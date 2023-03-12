import React, { useState } from 'react'
import styles from './IndexPage.module.css';
import CustomInput from '../../Componants/Atoms/MyInput/CustomInput'
import CustomButton from '../../Componants/Atoms/MyButton/CustomButton'
import { PackageData } from '../../Data/PakcageData';
import { useRecoilState } from 'recoil';

const IndexPage = () => {
  const [data,setData] = useRecoilState(PackageData);
  return (
    <>
      <div className={styles.mainDiv} >
        <div className={styles.searchBardiv}>
          <h2>Search for npm package</h2>
          <CustomInput className={styles.SearchInput}/>
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
           {data.map(item =>
            <>
             <tr>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.discribtion}</td>
              <td> <CustomButton btnText='Favorite'/></td>
              <td><CustomButton btnText='Delete'/></td>
             </tr>
            </>
            )}

          </table>
           
         </div>
      </div>
    </>
  )
}

export default IndexPage