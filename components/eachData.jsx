import {useContext} from "react";
import {imdbItemsData} from "../pages/[slug]";
import Image from "next/image";



export const EachData = () =>
{
    const {
        Title,
        Year,
        Released,
        Genre,
        Director,
        Writer,
        Actors,
        Plot,
        Language,
        Country,
        Poster
    } = useContext(imdbItemsData)


    return (
        <>
            <div>
                <p className='title'>{Title}</p>
                <p className='years'>product Years : {Year}</p>
                <p className='Released'>released : {Released}</p>
                <Image
                    src={Poster}
                    width={280}
                    height={400}
                    layout={"fixed"}
                    alt={Title}
                />
                <p>Summery : {Plot}</p>

            </div>

            <style jsx>
                {
                    `
                      div {
                        width: 50rem;
                        height: 50rem;
                        background: #bddafd;
                        display: flex;
                        flex-direction: column;
                        justify-content: space-evenly;
                        align-items: start;
                      }

                      .title
                      {
                        font-size: 3rem;
                      }

                      .years {
                        font-size: 1.5rem;
                      }
                    `
                }

            </style>
        </>
    )
}