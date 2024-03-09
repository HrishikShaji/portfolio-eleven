export const Contact = () => {
	return (
		<div className="h-screen  w-full bg-white p-10 flex flex-col gap-20 ">
			<h1 className="text-8xl text-black">Contact</h1>
			<form className="flex flex-col gap-4 w-[50%]">
				<input
					className="p-2 border-b-2  focus:outline-none border-black w-full"
					placeholder="Name..."
				/>
				<input
					className="p-2  focus:outline-none border-b-2 border-black w-full"
					placeholder="Email..."
				/>
				<textarea
					className="p-2 focus:outline-none border-b-2 border-black w-full"
					placeholder="Message..."
				/>
				<button className="p-2 bg-black text-white w-full">Send</button>
			</form>
		</div>
	);
};
