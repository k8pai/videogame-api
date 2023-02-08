import { useEffect, useState } from "react";
import useSWR from "swr";


const fetcher = (...args) => fetch(...args).then(response => response.json());

export default function App() {

	const [games, setGames] = useState([]);
	const [title, setTitle] = useState('');

	const { data, error } = useSWR('https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15&pageSize=5', fetcher)

	const searchTitle = () => {
		fetch(`https://www.cheapshark.com/api/1.0/games?title=${title}&limit=4`)
		.then(response => response.json())
		.then(data => {
			setGames(data);
			// console.log(games)
		})
	}
	console.log(data)

	return (
		<div className="w-full h-full flex flex-col justify-center mx-auto ">
			<div className="max-w-3xl w-full items-center mx-auto text-center space-y-8 p-10 bg-cyan-800">
				<h1 className="text-3xl font-bold capitalize text-white">video games api</h1>
				<br />
				<input 
					type="text" 
					className="form-input w-fit px-3 py-2 rounded-md outline-black ring-black ring-2" 
					placeholder="minecraft..."
					onChange={(e) => setTitle(e.target.value)}
					/>
				<button
					className="form-input ml-8 px-3 py-2 rounded-md outline-black ring-black ring-2" 
					onClick={(e) => searchTitle()}>
					search 
				</button>

				{games && games?.map((el, key) => {
					return (
						<div className="space-y-1 p-4 w-full rounded-md border-black border-2 bg-white text-left" key={key}>
							<p>{el.gameID} | {el.external}</p>
							<p>cheapest deal: {el.cheapest}</p>
							{el.steamAppID? <a href={`https://store.steampowered.com/app/${el.steamAppID}`}>visit steam</a>: null}
						</div>
					)
				})}
			</div>
			<div className="max-w-3xl w-full mx-auto text-center space-y-8 p-10">
				<h1 className="text-3xl font-bold">latest deals</h1>
				{data && data?.map((el, key) => {
					return (
						<div className="space-y-1 p-4 rounded-md border-black border-2 bg-cyan-800 text-white text-left" key={key}>
							<p>{el.gameID} | {el.title}</p>
							<p>Normal Price: {el.normalPrice}</p>
							<p>Offer Price: {el.salePrice}</p>
							<h3>You Save {el.savings.substr(0, 5)}%</h3>
							{el.steamAppID? <a href={`https://store.steampowered.com/app/${el.steamAppID}`}>visit steam</a>: null}
						</div>
					)
				})}
			</div>
		</div>
	)
}