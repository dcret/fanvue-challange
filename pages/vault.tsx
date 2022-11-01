import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import Head from "next/head";
import Image from 'next/Image'

interface VaultPage {
    images: Image[];
  
}

const Vault = (props: VaultPage) => {
    if(!props.images.length) {
      return <Typography> Loading images...</Typography> 
    }
    return (
        <>
        <Head>
        <title>Vault</title>
          <meta name="description" content="Photos Gallery on Vault page" />
          <meta name="keywords" content="Photos, Images, Next Image"/>
          <meta name="author" content="Darius Cret"/>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        </Head>
         <Grid container spacing={2} > 
            { props.images? props.images.map((image: Image)  => {
            <Grid item xs={6} lg={3} key={image.id}>
                <Image
                src={image.url}
                alt={image.title}
                width={500}
                height={500}
                /> 
                </Grid>
                }) : <></>}
                </Grid> 
       </>
    )
}

interface Image {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}
const getImages = async () =>  {
    let images: Image[] = [];
    const res =  await fetch('https://jsonplaceholder.typicode.com/photos');
    images  = await res.json();
  
    return images;
  }

export async function getServerSideProps(context) {
    const images: Image [] = await getImages();
    return {
      props: {
        images: images,
      }, // will be passed to the page component as props
    }
  }
  

export default Vault;