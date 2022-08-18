<template>
    <div class="stars">   
        <span v-if="stars >= 4">
            <i class="pi pi-star-fill" style="font-size: 1.2rem"></i>
            <i class="pi pi-star-fill" style="font-size: 1.2rem"></i>
            <i class="pi pi-star-fill" style="font-size: 1.2rem"></i>
            <i class="pi pi-star-fill" style="font-size: 1.2rem"></i>
            <i class="pi pi-star-fill" style="font-size: 1.2rem"></i>
        </span>
        <span v-else-if="stars >= 3">
            <i class="pi pi-star-fill" style="font-size: 1.2rem"></i>
            <i class="pi pi-star-fill" style="font-size: 1.2rem"></i>
            <i class="pi pi-star-fill" style="font-size: 1.2rem"></i>
            <i class="pi pi-star-fill" style="font-size: 1.2rem"></i>
        </span>
        <span v-else-if="stars >= 2">
            <i class="pi pi-star-fill" style="font-size: 1.2rem"></i>
            <i class="pi pi-star-fill" style="font-size: 1.2rem"></i>
            <i class="pi pi-star-fill" style="font-size: 1.2rem"></i>
        </span>
        <span v-else-if="stars >= 1">
            <i class="pi pi-star-fill" style="font-size: 1.2rem"></i>
            <i class="pi pi-star-fill" style="font-size: 1.2rem"></i>
        </span>  
        <span v-else="stars >= 0">
            <i class="pi pi-star-fill" style="font-size: 1.2rem"></i>
        </span>
       
    </div>
    <p class="reviews">
        ({{reviews}} customer reviews)
    </p>
</template>

<script>
export default {
    props: ['stars', 'reviews'],
    data() {
        return {
            // tempStar: '<i class="pi pi-star-fill" style="font-size: 1.2rem"></i>'
        }
    },
    methods: {
        // tempStars (Array.from({length: 5}, (_,index)  
    //    tempStars: () => {
    //         Array.from({length: 5}, (_, index) => {
    //             return (
    //             <span key={index}>
    //                 {
    //                     this.stars >= index + 1 ? (
    //                         <i class="pi pi-star-fill" style="font-size: 2rem"></i>
    //                     ) : this.stars >= index + 0.5 ? (
    //                         <i class="pi pi-star" style="font-size: 2rem"></i>
    //                     ) : (
    //                         <i class="pi pi-check"></i>
    //                     )
    //                 }
    //             </span>
    //             )
    //         })
    //     }
    },
     
}
</script>