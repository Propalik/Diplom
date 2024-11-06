import { Modal } from "./components/modal.js";
import Swiper from "swiper"; // Инициализация слайдера
import { Navigation, Pagination } from "swiper/modules"; // Инициализация иконок, пагинации и т.д.

// Модалка формы

// const modalForm = new Modal("#modal", "#signup");
// // Модалка навигации в мобилке

// const modalNav = new Modal("#modal-nav", ".burger-menu");


document.addEventListener("DOMContentLoaded", function () {
    const swiper = new Swiper(".swiper", {
        modules: [Navigation, Pagination],
        direction: "horizontal",
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });

    console.log("swiper", swiper);
});

const inputText = document.querySelector("#register-username");

/* Обработчик событий текстовый инпут */
inputText.addEventListener("change", (event) => {
    console.log(event.target.value);

    const error = document.querySelector("#username-error");

    // Регулярное выражение для проверки имени пользователя
    const usernamePattern = /^[a-zA-Zа-яА-Я]{3,}$/;

    if (!event.target.value) {
        error.textContent = "";
    } else if (!usernamePattern.test(event.target.value)) {
        error.textContent = "Имя пользователя не соответствует требованиям";
    } else {
        error.textContent = "";
    }
});

const btnUp = {
    el: document.querySelector(".btn-up"),
    show() {
        // Удалим у кнопки класс btn-up_hide
        this.el.classList.remove("btn-up_hide");
    },
    hide() {
        // Добавим к кнопке класс btn-up_hide
        this.el.classList.add("btn-up_hide");
    },
    addEventListener() {
        // При прокрутке содержимого страницы
        window.addEventListener("scroll", () => {
            // Определяем величину прокрутки
            const scrollY =
                window.scrollY || document.documentElement.scrollTop;
            // Если страница прокручена больше чем на 400px, то делаем кнопку видимой, иначе скрываем
            // eslint-disable-next-line no-unused-expressions
            scrollY > 400 ? this.show() : this.hide();
        });
        // При нажатии на кнопку .btn-up
        document.querySelector(".btn-up").onclick = () => {
            // Переместим в начало страницы
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth",
            });
        };
    },
};

btnUp.addEventListener();

/*
 * Скрытие и открытие блока
 * document.addEventListener("DOMContentLoaded", function() {
 *     const toggleButton = document.getElementById("toggleButton");
 *     const container1 = document.getElementById("container1");
 */

/*
 *     ToggleButton.addEventListener("click", function() {
 *         if (container1.classList.contains("hidden")) {
 *             container1.classList.remove("hidden");
 *             toggleButton.innerHTML = "&#9660;"; // Стрелочка вниз
 *         } else {
 *             container1.classList.add("hidden");
 *             toggleButton.innerHTML = "&#9654;"; // Стрелочка вправо
 *         }
 *     });
 * });
 */

document.addEventListener("DOMContentLoaded", function () {
    const toggleButtons = document.querySelectorAll(".toggleButton");

    toggleButtons.forEach((toggleButton) => {
        toggleButton.addEventListener("click", function () {
            const container = toggleButton
                .closest("section")
                .querySelector(".container1");
            if (container.classList.contains("hidden")) {
                container.classList.remove("hidden");
                toggleButton.innerHTML = "&#9660;"; // Стрелочка вниз
            } else {
                container.classList.add("hidden");
                toggleButton.innerHTML = "&#9654;"; // Стрелочка вправо
            }
        });
    });
});

function openModal(imageSrc) {
    const modal = document.getElementById("myModal");
    const modalImg = document.getElementById("modalImg");
    modal.style.display = "block";
    modalImg.src = imageSrc;
}

// Функция для закрытия модального окна
function closeModal() {
    const modal = document.getElementById("myModal");
    modal.style.display = "none";
}

// Получаем все изображения на странице
const images = document.querySelectorAll("img");

// Проходимся по каждому изображению и добавляем обработчик событий для клика
images.forEach((image) => {
    image.addEventListener("click", () => {
        // Получаем путь к изображению из атрибута src и передаем его в функцию openModal()
        const imagePath = image.getAttribute("src");
        openModal(imagePath);
    });
});
