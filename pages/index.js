import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from "next/link";
import indexStyles from './index.module.css'
import {getAllData} from "./api/getData";
import {useState} from "react";


export default function Home({allData}) {

    const [apiFetch , setApiFetch] = useState()
    const [inputVal , setInputVal] = useState('')

    console.log(allData)

    const {parent} = indexStyles

    const Render = allData.Search.map(items => {

        const {Title , Year , imdbID , type , Poster} = items

        return (
            <div key={imdbID}>
                <Link href={Title}>
                    <Image alt={Title} src={Poster} width={290} height={400} layout={"fixed"}/>
                </Link>
                <h2>{Title}</h2>
                <h3>{type}</h3>
                <h4>{Year}</h4>
            </div>
        )
    })

    return (

        <div>
            <div className='searchInput'>
                <input type='text' value={inputVal} onChange={(e) => setInputVal(e.target.value)}/>
                <Link href={inputVal}>submit</Link>
            </div>


            <div className={parent}>
                {Render}
            </div>

            <style jsx>
                {
                    `
                      .searchInput
                      {
                      width: 50%;
                      height: 3vw;
                      margin: auto;
                      background: #eaeaea;
                      display: flex;
                      justify-content: center;
                      align-items: center;
                      }

                    `
                }
            </style>

        </div>
    )
}


export const getStaticProps = async () =>
{
    const allData = await getAllData().then(Response => Response.json())
    if (!allData)
    {
        notFound : true
    }
    return {
        props : {allData}
    }

}