<template>
    <section>
        <!-- component -->

        <section>
            <a href="/Home">Volver a inicio</a>
        </section>

        <section class="bg-black-lighter p-4 shadow">
            <div class="md:flex">
                <h2 class="md:w-1/3 uppercase tracking-wide text-sm sm:text-lg mb-6">Crear un producto nuevo</h2>
            </div>
            <form>
                <div class="md:flex mb-8">
                    <div class="md:w-1/3">
                        <legend class="uppercase tracking-wide text-sm">Datos del producto</legend>
                        <p class="text-xs font-light text-red">Ingresa los datos basicos del producto.</p>
                    </div>
                    <div class="md:flex-1 mt-2 mb:mt-0 md:px-3">
                        <div class="mb-4">
                            <label class="block uppercase tracking-wide text-xs font-bold text-gray-50">Nombre</label>
                            <input class="w-full shadow-inner p-4 border-0 text-black" type="text" name="name"
                                placeholder="">
                        </div>
                        <div class="md:flex mb-4">
                            <div class="md:flex-1 md:pr-3">
                                <label
                                    class="block uppercase tracking-wide text-charcoal-darker text-xs font-bold">Precio</label>
                                <input class="w-full shadow-inner p-4 border-0 text-black" type="text" name="address_street"
                                    placeholder="">
                            </div>
                            <div class="md:flex-1 md:pl-3">
                                <label
                                    class="block uppercase tracking-wide text-charcoal-darker text-xs font-bold">Tipo
                                    </label>
                                <input class="w-full shadow-inner p-4 border-0 text-black" type="text" name="address_number"
                                    placeholder="">
                            </div>
                        </div>
                        
                    </div>
                </div>
                
                <div class="md:flex mb-6">
                    <div class="md:w-1/3">
                        <legend class="uppercase tracking-wide text-sm">Descripcion</legend>
                    </div>
                    <div class="md:flex-1 mt-2 mb:mt-0 md:px-3">
                        <textarea class="w-full shadow-inner p-4 border-0 text-black" placeholder=""
                            rows="6"></textarea>
                    </div>
                </div>
                <div class="md:flex mb-6">
                    <div class="md:w-1/3">
                        <legend class="uppercase tracking-wide text-sm">Imagen del producto</legend>
                    </div>
                    <div class="md:flex-1 px-3 text-center">
                        <div class="button bg-gold hover:bg-gold-dark text-cream mx-auto cusor-pointer relative">
                            <input class="opacity-0 absolute pin-x pin-y" type="file" name="cover_image">
                            Agregar imagen 📸
                        </div>
                    </div>
                </div>
                <div class="md:flex mb-6 border border-t-1 border-b-0 border-x-0 border-cream-dark">
                    <div class="md:flex-1 px-3 text-center md:text-right">
                        <input type="hidden" name="sponsor" value="0">
                        <input class="button text-cream-lighter bg-brick hover:bg-brick-dark" type="submit"
                            value="Crear Producto">
                    </div>
                </div>
            </form>
        </section>
    </section>
</template>

<script>
import { DeprecationTypes } from 'vue';
import NavBar from '../components/NavBar.vue';
</script>