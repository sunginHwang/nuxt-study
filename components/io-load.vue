<template>
    <div class="io-wrapper">
        <img class="io-img" v-for="image in images" :src="image"/>
    </div>
</template>

<script>


    export default {
        name: "io-load",
        data() {
            return {
                images: [
                    'https://picsum.photos/420/320?image=0',
                    'https://lorempixel.com/420/320/abstract/1/Sample',
                    'https://imgplaceholder.com/420x320/ff7f7f/333333/fa-image',
                    'https://via.placeholder.com/420x320/ff7f7f/333333?text=Sample',
                    'https://placeimg.com/420/320/tech/grayscale',
                    'https://loremflickr.com/420/320?lock=1',
                    'https://placekitten.com/420/320?image=2',
                    'https://placebear.com/420/320?image=2',
                    'https://www.fillmurray.com/420/320'
                ]
            }
        },
        mounted() {
            const io = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        console.log('====viewport-in=====');
                    }
                })
            })

            const boxElList = document.querySelectorAll('.io-img');
            boxElList.forEach((el) => {
                io.observe(el);
            })
        }
    }
</script>

<style scoped>
    .io-wrapper {
        width: 100%;
        height: 100%;
    }

    .io-img {
        width: 80%;
        height: 80%;
    }
</style>
