# React_Colledge
Функція clearInterval: Використовується для припинення виконання інтервалу, що був створений за допомогою setInterval. Це важливо в контексті автоматичної прокрутки, оскільки без clearInterval інтервал може продовжувати виконувати функцію навіть після того, як користувач змінив слайд.

Параметр [index] у useEffect: Цей параметр вказує, на які зміни компоненту реагувати, щоб викликати функцію, передану в useEffect. У нашому випадку, ми передаємо [index], оскільки ми хочемо, щоб useEffect перезапускався при зміні значення index. Це необхідно для коректної реакції на зміни слайдів та правильного виконання автоматичної прокрутки.
