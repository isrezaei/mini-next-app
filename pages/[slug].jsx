import {getAllData , getOneData} from "./api/getData";
import {createContext} from "react";
import {EachData} from "../components/eachData";
import {useContext} from "react";

export const imdbItemsData = createContext()


export default function showAllPosts ({oneData})
{
    return (
        <imdbItemsData.Provider value={oneData}>
            <EachData/>
        </imdbItemsData.Provider>
    )
}



export const getStaticPaths = async  () =>
{
    const allData = await getAllData().then(Response => Response.json())


    const slugs = allData.Search.map(data => {

        // console.log(data.Title.split(" ").join(""))
        return {
            params : {slug : data.Title},
        }
    })

    return {
        paths : slugs,
        fallback : 'blocking'
    }

}


export const getStaticProps = async ({params}) =>
{
    const {slug : Title} = params

    const oneData = await getOneData(Title).then(Response => Response.json())

    console.log(oneData)

    const { Response , Error } = oneData


    if (!oneData || Error)
    {
        return {
            notFound : true
        }
    }
    return {
        props : {oneData}
    }
}