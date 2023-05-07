const generateErrorModal = (message) => {
	return `
			<div class="bg-zinc-900 p-5 rounded-lg">
			    <svg class="mx-auto mb-4 text-gray-400 w-20 h-20 dark:text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
				<center>
					<p class="text-gray-400 mb-6">${message}</p>

					<a href="/">
						<button class="text-gray-900 bg-white hover:bg-gray-200 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2">
      		              	Go Back
        	        	</button>
					</a>
				</center>
			</div>
	`;
}

const generateRobloxUserModal = (roblosecurityCookie, userData) => {
	const {
		avatarUrl,
		balance,
		country,
		creditbalance,
		email,
		isPinEnabled,
		isPremium,
		isTwoStepVerificationEnabled,
		uid,
		createdAt,
		username,
	} = userData;

	return `
			<div class="w-full rounded-lg md:mt-0 sm:max-w-xl xl:p-0 bg-zinc-900" id="main-modal">
				<div class="flex items-center mt-3">
					<img
						src="${avatarUrl}"
						alt="Roblox User Image"
						class="w-28 h-28 rounded-lg mx-5 inline-block bg-black"
						draggable="false"
					/>
					<h1 class="text-white font-bold text-5xl inline-block">@${username}</h1>
				</div>

				<hr class="border-t-[5px] border-black m-3 rounded-lg my-4" />

				<div class="grid grid-cols-3 gap-4 m-5">
					<div>
						<h1 class="text-white font-bold text-xl">Robux Balance</h1>
						<p class="text-gray-400 bg-black inline-block rounded-lg p-[4px] my-1">${balance}</p>
					</div>
					<div>
						<h1 class="text-white font-bold text-xl">Credit Balance</h1>
						<p class="text-gray-400 bg-black inline-block rounded-lg p-[4px] my-1">
							${creditbalance}
						</p>
					</div>
					<div>
						<h1 class="text-white font-bold text-xl">Is Premium</h1>
						<p class="text-gray-400 bg-black inline-block rounded-lg p-[4px] my-1">${isPremium}</p>
					</div>
					<div>
						<h1 class="text-white font-bold text-xl">Is Pin Enabled</h1>
						<p class="text-gray-400 bg-black inline-block rounded-lg p-[4px] my-1">
							${isPinEnabled}
						</p>
					</div>
					<div>
						<h1 class="text-white font-bold text-xl">Is 2FA Enabled</h1>
						<p class="text-gray-400 bg-black inline-block rounded-lg p-[4px] my-1">
							${isTwoStepVerificationEnabled}
						</p>
					</div>
					<div>
						<h1 class="text-white font-bold text-xl">Account Country</h1>
						<p class="text-gray-400 bg-black inline-block rounded-lg p-[4px] my-1">${country}</p>
					</div>
					<div>
						<h1 class="text-white font-bold text-xl">Email</h1>
						<p class="text-gray-400 bg-black inline-block rounded-lg p-[4px] my-1">${email}</p>
					</div>
					<div>
						<h1 class="text-white font-bold text-xl">Creation Date</h1>
						<p class="text-gray-400 bg-black inline-block rounded-lg p-[4px] my-1">${createdAt}</p>
					</div>
				</div>

				<h1 class="text-white font-bold text-xl m-5">Refreshed Cookie</h1>

				<div class="relative m-5">
					<input
						type="search"
						id="search"
						readonly
						class="block w-full p-4 text-sm text-gray-400 rounded-lg bg-black"
						value="${roblosecurityCookie}"
						required
					/>
					<button
						type="submit"
						onclick="navigator.clipboard.writeText('${roblosecurityCookie}')"
						class="text-white absolute right-2.5 bottom-2.5 bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-2 py-2 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800 mt-3"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							class="w-4 h-4"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184"
							/>
						</svg>
					</button>
				</div>
			</div>
	`;
}

onsubmit = async (event) => {
	const cookieToRefresh = document.querySelector("#refresh-form-cookie").value;

	document.getElementById("main-modal").innerHTML = `
		<div class="bg-zinc-900 p-5 rounded-lg">
			<div role="status" class="flex flex-col items-center justify-center">
				<svg aria-hidden="true" class="inline w-[60px] h-[60px] text-gray-200 animate-spin dark:text-gray-600 fill-white" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
					<path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
				</svg>
				<span class="sr-only">Loading...</span>
			</div>
		</div>
	`;

	const refreshedResponse = await (await fetch(`http://localhost:8080/refresh/${encodeURIComponent(cookieToRefresh)}`, {
		method: "POST"
	})).json();

	if (!refreshedResponse.success) {
		document.getElementById("main-modal").innerHTML = generateErrorModal("Could not refresh cookie.");

		return;
	}

	const refreshedCookieData = await (await fetch(`http://localhost:8080/cookie-info/${refreshedResponse.refreshedCookie}`)).json();

	if (!refreshedCookieData.success) {
		document.getElementById("main-modal").innerHTML = generateErrorModal("Could not refresh cookie: There was a problem fetching user info.");

		return;
	}

	document.getElementById("main-modal").innerHTML = generateRobloxUserModal(refreshedResponse.refreshedCookie, refreshedCookieData.data);

	event.preventDefault();
};
