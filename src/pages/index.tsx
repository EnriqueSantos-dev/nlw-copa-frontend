import Image from "next/image";
import type { GetStaticProps } from "next";
import React, { useRef } from "react";

import { toast } from "react-toastify";

import phonesImageUrl from "public/assets/phones-image.png";
import avataresImageUrl from "public/assets/avatares.png";

import TextField from "../components/TextField";
import Button from "../components/Button";
import Count from "../components/Count";
import Logo from "../components/Logo";
import ToastySuccess from "../components/ToastySuccess";

import getUsersCount from "../lib/getUsersCount";
import getGuessesCount from "../lib/getGuessesCount";
import getPoolsCount from "../lib/getPoolsCount";
import fetchPool from "../lib/fecthPool";

interface Props {
  poolsCount: number;
  guessesCount: number;
  usersCount: number;
}

export default function Page({ guessesCount, poolsCount, usersCount }: Props) {
  const namePoolRef = useRef<HTMLInputElement>(null);

  async function handleSubmitPool(event: React.FormEvent): Promise<void> {
    event.preventDefault();

    if (namePoolRef?.current?.value && namePoolRef.current.value.length > 5) {
      await toast.promise(
        fetchPool<{ code: string }>({ title: namePoolRef.current.value }),
        {
          error: "Não foi possível criar seu bolão",
          pending: "Criando bolão, aguarde!",
          success: {
            render({ data }) {
              return <ToastySuccess code={data?.code!} />;
            },
            icon: false,
          },
        },
        {
          autoClose: 8000,
          closeButton: true,
          theme: "dark",
        }
      );
    }
  }

  return (
    <main className="min-h-screen min-w-screen py-8 flex justify-center items-center bg-bg-nlw bg-cover">
      <div className="flex max-w-[1124px]">
        <section className="flex flex-col flex-1">
          <header className="mb-[60px]">
            <Logo />
          </header>

          <h1 className="text-white font-bold text-5xl">
            Crie seu próprio bolão da copa e compartilhe entre amigos!
          </h1>

          <div className="flex  gap-3 items-center mt-10">
            <Image
              src={avataresImageUrl}
              className="cover"
              alt=""
              quality={100}
            />
            <p className="text-xl text-white font-bold">
              <span className="text-[#129E57]">
                {usersCount > 0 ? `+${usersCount}` : usersCount}{" "}
              </span>
              pessoas já estão usando
            </p>
          </div>

          <form
            onSubmit={handleSubmitPool}
            className="flex gap-2 items-stretch mt-10 w-full"
          >
            <TextField
              placeholder="Qual o nome do seu bolão?"
              ref={namePoolRef}
            />

            <Button>Criar meu bolão</Button>
          </form>

          <p className="text-[#8D8D99] text-sm mt-4 mr-[89px]">
            Após criar seu bolão, você receberá um código único que poderá usar
            para convidar outras pessoas 🚀
          </p>

          <div className="relative border-t border-gray-600 flex justify-between mt-10 py-10 after:h-[62px] after:w-[1px] after:bg-gray-600 after:-translate-x-1/2 after:left-1/2 after:absolute">
            <Count label="Bolões criados" count={poolsCount} />

            <Count label="Palpites enviados" count={guessesCount} />
          </div>
        </section>

        <section className="flex-1 text-right">
          <Image src={phonesImageUrl} className="cover" alt="" quality={100} />
        </section>
      </div>
    </main>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const [poolsCount, guessesCount, usersCount] = await Promise.all([
    getPoolsCount(),
    getGuessesCount(),
    getUsersCount(),
  ]);


  return {
    props: {
      poolsCount,
      guessesCount,
      usersCount,
    },
    revalidate: 60 * 10, // 10 minutes
  };
};
