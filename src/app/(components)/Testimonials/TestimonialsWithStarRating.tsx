"use client";
import { StarIcon } from "@heroicons/react/20/solid";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import SvgCercleDegradation from "../SVGDecoration/SvgCercleDegradation";

// Importar estilos de Swiper
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface Testimonial {
  id: number;
  name: string;
  text: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 2,
    name: "Belén Cayetano costas",
    text: "Estuve muchos años con dolor en los antebrazos,incapacitante muchos días.Años de buscar una solución entre las diferentes alternativas no encontré apenas alivio. Hasta que llegué a Alex y en una sesión se quedó con el ochenta por ciento de mi dolor.He seguido sus indicaciones y estoy restablecida completamente. Le estoy muy agradecida, lo recomiendo sin ninguna duda.Además de la calidad y calided humana que vas a encontrar.",
    rating: 5,
  },
  {
    id: 3,
    name: "Ivan Fenoll Vidal",
    text: "Llevo años acudiendo y el trato es inmejorable, me ha ayudado en todos mis problemas físicos a lo largo de todo este tiempo para que pudiera rendir tanto en el deporte como en mi día a día sin ninguna molestia. Además, a parte de ser un magnífico profesional, es una gran persona que esta pendiente de ti durante todo el proceso con una gran empatía. Sin duda un lugar espectacular para tratarse el cual no cambio por nada",
    rating: 5,
  },
  {
    id: 4,
    name: "Omar Miralles",
    text: "Llevo varios años en Tacte y no puedo estar más satisfecho. Fui por una lesión de periostitis, y desde el primer día me sentí en manos de un profesional. Utiliza técnicas muy completas como Indiba, punción seca y masajes manuales, siempre adaptadas a lo que mi cuerpo necesita en cada momento. El trato es cercano, te escucha y se nota que domina lo que hace. Después de cada sesión noto mejoría. Recomiendo Tacte totalmente, tanto si haces deporte como si simplemente quieres cuidarte y prevenir molestias. ¡Un sitio de confianza!",
    rating: 5,
  },
  {
    id: 5,
    name: "Noelia Carbonell",
    text: "Llevo tiempo en Tacte y solo puedo decir una palabra: maravilla. Alex me ha ayudado a soltar estrés y mejorar mis hábitos posturales. No lo cambio por nada. No es solo una clínica, es un espacio de equilibrio cuerpo- mente imprescindible.Para mí cada sesión es un regalo. Gracias Alex",
    rating: 5,
  },
  {
    id: 6,
    name: "Saray Martinez Barcelona",
    text: "Excelente, me encanta como paciente que soy muchos años, cada vez más contenta. siempre tiene solución para cualquier problema de patología que puedas tener. muy contenta de acudir a su consulta, me deja siempre como nueva, muchas gracias. Alex tacte 100%.",
    rating: 5,
  },
  {
    id: 7,
    name: "Juanma Rico Capdevila",
    text: "Un fenómeno que aparte de ser gran persona, gran profesional tiene mucha empatía con las sensaciones que sientes y te ayuda a prevenir y mejorar en tu día a día. Sin duda no faltare en su casa❤.",
    rating: 5,
  },
  {
    id: 8,
    name: "JuanVi Martinez",
    text: "Sólo puedo decir Gracias cuando pienso en Tacte, Gracias a Tacte volví a Correr una carrera después de muchos años tras un accidenteLlevo 5 años aproximadamente con el y hemos forjado un Gran equipo, No cambies nunca 😘😘",
    rating: 5,
  },
  {
    id: 9,
    name: "Criss Monzo",
    text: "Me encanta Tacte, no es solo centro de masajes. La profesionalidad de Alex es impecable, con consejos sobre nuestra salud. Como en casa ❤️",
    rating: 5,
  },
  {
    id: 10,
    name: "SwToMek",
    text: "Mi fisio de confianza , un trato único y profesional. Después de unas 40 sesiones lo que puedo decir es que sabe muy bien lo que hace, y que siempre me saca de las sobrecargas y molestias",
    rating: 5,
  },
  {
    id: 11,
    name: "Armando Albert",
    text: "Lugar fantástico y atención muy buena. El masaje descontracturante me ha dejado como nuevo. Sin duda para repetir.",
    rating: 5,
  },
  {
    id: 12,
    name: "Alba Aguilar",
    text: "Lo mejor de la atención es la escucha y la presencia. No en todos los lugares saben escuchar de verdad a los pacientes.",
    rating: 5,
  },
  {
    id: 13,
    name: "Salva Vicent",
    text: "Un crack, llevaba sin cuidar mi espalda años, y en 3 sesiones me ha dejado como nuevo, trato perfecto y un local muy agradable, gracias Álex!",
    rating: 5,
  },
  {
    id: 14,
    name: "María García Ibarra",
    text: "Sin ninguna duda de lo mejorito. Todo un profesional y un trato excelente.",
    rating: 5,
  },
];

export default function TestimonialsWithStarRating() {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <StarIcon
        key={index}
        aria-hidden="true"
        className={`size-5 flex-none ${
          index < rating ? "text-indigo-600" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <section className="bg-tacte-primary-50 px-6 py-24 sm:py-32 lg:px-8 relative isolate overflow-hidden">
      <div className="mx-auto max-w-7xl relative w-full">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          navigation={{
            prevEl: ".swiper-button-prev-custom",
            nextEl: ".swiper-button-next-custom",
          }}
          pagination={{
            clickable: true,
            bulletClass: "swiper-pagination-bullet-custom",
            bulletActiveClass: "swiper-pagination-bullet-active-custom",
          }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}
          loop={true}
          speed={800}
          className="testimonials-swiper"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <figure className="max-w-4xl mx-auto">
                <p className="sr-only">{testimonial.rating} out of 5 stars</p>
                <div className="flex gap-x-1 justify-start">
                  {renderStars(testimonial.rating)}
                </div>
                <blockquote className="mt-10 text-xl/8 font-semibold tracking-tight text-gray-900 sm:text-2xl/9">
                  <p>"{testimonial.text}"</p>
                </blockquote>
                <figcaption className="mt-10 flex items-center justify-start gap-x-6">
                  <div className="text-sm/6">
                    <div className="font-semibold text-gray-900">
                      {testimonial.name}
                    </div>
                  </div>
                </figcaption>
              </figure>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Botones de navegación personalizados */}
        {/* <button
          className="swiper-button-prev-custom absolute left-0 sm:left-[-2rem] top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white shadow-lg hover:bg-gray-50 transition-colors hidden sm:flex items-center justify-center"
          aria-label="Testimonio anterior"
        >
          <ChevronLeftIcon className="size-6 text-gray-700" />
        </button>
        <button
          className="swiper-button-next-custom absolute right-0 sm:right-[-2rem] top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white shadow-lg hover:bg-gray-50 transition-colors hidden sm:flex items-center justify-center"
          aria-label="Testimonio siguiente"
        >
          <ChevronRightIcon className="size-6 text-gray-700" />
        </button> */}
      </div>

      <SvgCercleDegradation innerColor="#7775D6" color="#E935C1" />
    </section>
  );
}
