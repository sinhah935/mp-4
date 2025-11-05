import getData from "@/lib/getData";
import GameList from "@/components/GameList";

export default async function Home() {

    let data;
    try {
        data =  await getData();
    } catch (error) {
        console.log("API call failed!", error);
        return <p>Unable to obtain API data</p>
    }

   if (!data || data.error)
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
