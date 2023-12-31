import { NextComponentType, NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useState } from 'react'
import Styles from "../scss/home.module.scss"

const Home: NextPage = () => {
const router = useRouter()

const [soma, setSoma] = useState<number>(0)

const Somar = (): number => {
  setSoma(soma +1)
  return soma
}

const RotaSubtrair = () => {
router.push("/sub")
}
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={Styles.classe}>
     <button onClick={() => Somar()}>mais</button>
     <p>{soma}</p>
     <button onClick={() => RotaSubtrair()}>ir para a pagina subtrair</button>
      </main>
    </>
  )
}


export default Home