<script>
    let city = $state("");
    let weather = $state(null);
    let loading = $state(false);
    let error = $state("");

    const apiKey = "ed2828e59ddf36874f1950c82bf3f254";

    async function getWeather() {
        if (!city.trim())  return;

        weather = null;
        error = "";
        loading = true;

        try {
            const res = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
            );

            if (!res.ok) throw new Error("City not found!");
            const data = await res.json()
            weather = {
                temp: data.main.temp,
                desc: data.weather[0].description,
                icon: data.weather[0].icon
            }
        } catch (err) {
            error = err.message;
        } finally {
            loading = false;
        }
    }
</script>

<main class="min-h-screen bg-blue-50 flex flex-col items-center justify-center p-4">
    <h1 class="text-3xl font-bold mb-8">Weather App</h1>

    <div class="flex gap-2 mb-4">
        <input
            bind:value={city}
            placeholder="Enter city"
            class="px-4 py-2 border rounded w-64"
            onkeydown={(e) => e.key === "Enter" && getWeather()}
        />
        <button
            onclick={getWeather}
            class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
            Get Weather
        </button>
    </div>

    {#if loading}
        <p>Loading...</p>
    {:else if error}
        <p class="text-red-500">{error}</p>
    {:else if weather}
        <div class="bg-white rounded-xl p-6 shadow-md text-center max-w-md w-full mx-auto">
            <img src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`} alt="Weather icon" class="mx-auto">
            <p class="text-2xl font-semibold">{weather.temp}°C</p>
            <p class="capitalize text-gray-600">{weather.desc}</p>
        </div>
    {/if}
</main>


