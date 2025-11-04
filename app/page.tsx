import getData from "@/lib/getData";
import GameList from "@/components/GameList";

export default async function Home() {

   const data =  await getData();
   if (data.error)
   {
       return <p>Unable to obtain API data</p>
   }

   //Replace books with respectiver array name
   const specific_data = Array.isArray(data.results)?data.results:[];

    if (specific_data === 0) {
        return <p> No results found </p>;
    }

   return <GameList games={specific_data} />
}
