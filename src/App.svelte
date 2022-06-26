<script>
    import { Behance, Dev } from 'svelte-social-media-icons';
    // https://vitejs.dev/guide/assets.html#importing-asset-as-url
    // https://github.com/vitejs/vite/blob/v3.0.0-beta.2/packages/create-vite/template-svelte/src/App.svelte
    import SocialButton from './lib/SocialButton.svelte';
    import pictureUrl from '/picture.jpg';
</script>

<!-- Source: https://imgs.so/sid -->
<div class="flex flex-col max-w-xl min-h-screen mx-auto px-7">
    <main class="flex flex-col gap-5 my-auto">
        <!-- https://tailwindcss.com/docs/object-fit#resizing-to-cover-a-container -->
        <!-- https://stackoverflow.com/a/49305511 -->
        <!-- https://tailwindcss.com/docs/object-position -->
        <img src={pictureUrl} alt="" class="object-cover object-right w-16 h-16 rounded-full" />
        <div class="flex flex-col gap-2">
            <div class="flex flex-row gap-2">
                <p class="text-sm font-semibold leading-none">João Palmeiro</p>
                <p class="text-sm italic leading-none secondary">joaopalmeiro</p>
            </div>
            <p class="description">Data Visualization Engineer @ Feedzai</p>
        </div>
        <div class="flex flex-row flex-wrap gap-2">
            <SocialButton url="https://www.behance.net/joaopalmeiro"
                ><Behance class="w-4 h-4" />Behance</SocialButton
            >
            <SocialButton url="https://dev.to/joaompalmeiro"
                ><Dev class="w-4 h-4" />DEV</SocialButton
            >
        </div>
    </main>

    <footer class="py-4">
        <p class="text-xs secondary">
            Personal website/Online business card adapted from <a
                href="https://sdrn.co/"
                target="_blank"
                class="no-underline hover:underline">Siddharth Arun</a
            >'s
            <a href="https://imgs.so/" target="_blank" class="italic no-underline hover:underline"
                >imgs</a
            > platform.
        </p>
    </footer>
</div>

<style>
    main {
        color: #151515;
    }

    .description {
        font-size: 26px;
        line-height: 140%;
    }

    .secondary {
        color: #959595;
    }
</style>
