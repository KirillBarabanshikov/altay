<template>
  <div class='main'>
    <div class='video'>
      <transition name='fade' mode='out-in'>
        <div v-if='month === 1' class='markers one'>
          <div
              @click="openGallery('troitsk')"
              :class="['event_popup left', {out: out}]"
          >
            Фольклорный фестиваль <br> «Троицкие гуляния»
            <span>23 июня 2024</span>
          </div>
          <div
              @click="openGallery('peschan')"
              :class="['event_popup right', {out: out}]"
          >
            Туристский фестиваль <br> «Песчаная-2024»
            <span>8-12 июня 2024</span>
          </div>
          <div
              @click="openGallery('katun')"
              :class="['event_popup left', {out: out}]"
          >
            Всероссийский фестиваль <br> традиционной культуры <br> «День России на Бирюзовой Катуни»
            <span>8-12 июня 2024 </span>
          </div>
          <div
              @click="openGallery('robert')"
              :class="['event_popup right', {out: out}]"
          >
            Литературный фестиваль <br> Роберта Рождественского
            <span>21-22 июня 2024</span>
          </div>
          <div
              @click="openGallery('ah')"
              :class="['event_popup left', {out: out}]"
          >
            Гастрономический фестиваль <br> «АХ! Фест»
            <span>29-30 июня 2024</span>
          </div>
          <div
              @click="openGallery('zames')"
              :class="['event_popup left', {out: out}]"
          >
            Гастрономический фестиваль мяса <br> «Мясной замес»
            <span>июнь 2024</span>
          </div>
        </div>
        <div v-else-if='month === 2' class='markers two'>
          <div
              @click="openGallery('kultur')"
              :class="['event_popup right', {out: out}]"
          >
            Межрегиональный фестиваль <br> национальных культур <br> «Перекресток культур»
            <span>10 августа 2024</span>
          </div>
          <div
              @click="openGallery('shukshi')"
              :class="['event_popup left', {out: out}]"
          >
            Всероссийский фестиваль <br> «Шукшинские дни на Алтае»
            <span>23-27 июля 2024</span>
            <div class='star'></div>
          </div>
          <div
              @click="openGallery('beatles')"
              :class="['event_popup right', {out: out}]"
          >
            Музыкальный фестиваль <br> Because of the Beatles
            <span>13 июля 2024</span>
          </div>
          <div
              @click="openGallery('wings')"
              :class="['event_popup right', {out: out}]"
          >
            Авиамодельный фестиваль <br> «Крылья Сибири»
            <span>22 июля 2023</span>
          </div>
          <div
              @click="openGallery('water')"
              :class="['event_popup right', {out: out}]"
          >
            Массовый рекорд <br> по лежанию на открытой воде <br> «Звезда на Яровом»
            <span>22 июля 2023</span>
          </div>
          <div
              @click="openGallery('krepost')"
              :class="['event_popup right', {out: out}]"
          >
            Фестиваль военно-исторической реконструкции <br> «Белоярская крепость»
            <span>июль 2022</span>
          </div>
          <div
              @click="openGallery('maso')"
              :class="['event_popup left', {out: out}]"
          >
            Фестиваль исторических квестов <br> «Квест фест»
            <span>6 июля 2024</span>
          </div>
          <div
              @click="openGallery('maso')"
              :class="['event_popup left', {out: out}]"
          >
            Фестиваль исторических квестов <br> «Квест фест»
            <span>6 июля 2024</span>
          </div>
          <div
              @click="openGallery('sup')"
              :class="['event_popup left', {out: out}]"
          >
            «SUPряжение» <br> костюмированный заезд на сапбордах
            <span>20 июля 2024</span>
          </div>
        </div>
        <div v-else-if='month === 3' class='markers three'>
          <div
              @click="openGallery('zemlya')"
              :class="['event_popup right', {out: out}]"
          >
            Всероссийский фестиваль <br> творчества и спорта им. М.C. Евдокимова <br> «Земляки»
            <span>2-4 августа 2024</span>
          </div>
          <div
              @click="openGallery('cheese')"
              :class="['event_popup left', {out: out}]"
          >
            Гастрономический фестиваль <br> «Сырная деревня»
            <span>10 августа 2024</span>
          </div>
          <div
              @click="openGallery('zvenigora')"
              :class="['event_popup right', {out: out}]"
          >
            Международный фестиваль <br> бардовской песни <br> «Звенигора»
            <span>25-27 августа 2023</span>
          </div>
          <div
              @click="openGallery('brands')"
              :class="['event_popup right', {out: out}]"
          >
            Семейный гастрономический фестиваль <br> «Алтайские бренды. Продукты для здоровья»
            <span> 24-25 августа 2024</span>
          </div>
          <div
              @click="openGallery('flashmob')"
              :class="['event_popup right', {out: out}]"
          >
            Всероссийская акция <br> «Экскурсионный флешмоб»
            <span>31 августа 2024</span>
          </div>
          <div
              @click="openGallery('kazak')"
              :class="['event_popup left', {out: out}]"
          >
            Открытые международные казачьи игры <br> «Шермиции на Сибирской земле»
            <span>август 2023</span>
          </div>
          <div
              @click="openGallery('zakroma')"
              :class="['event_popup left', {out: out}]"
          >
            Ярмарка натуральной продукции и сельского туризма <br> «Солоновские закрома»
            <span>24 августа 2024</span>
          </div>

        </div>
        <div v-else-if='!month' class='markers points'>
          <div class='marker'></div>
          <div class='marker'></div>
          <div class='marker'></div>
          <div class='marker'></div>
          <div class='marker'></div>
          <div class='marker'></div>
          <div class='marker'></div>
          <div class='marker'></div>
          <div class='marker'></div>
          <div class='marker'></div>
          <div class='marker'></div>
          <div class='marker'></div>
          <div class='marker'></div>
          <div class='marker'></div>
          <div class='marker'></div>
          <div class='marker'></div>
        </div>
      </transition>
    </div>
    <div class='footer'>
      <Nav :events-list='eventsList' @back='back' @changeMonth='changeMonth'/>
    </div>
    <transition name='fade'>
      <div v-if='show' class='season-gallery'>
        <GalleryEvents @close='show = false' :list='list' cover/>
      </div>
    </transition>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'
import Nav from '@/components/SeasonsNav/Nav.vue'
import Gallery from '@/components/Gallery.vue'
import GalleryEvents from '@/components/GalleryEvents.vue'

export default {
  name: 'Summer',
  components: {GalleryEvents, Gallery, Nav},
  data() {
    return {
      show: false,
      out: false,
      month: null,
      eventsList: [
        {
          id: 1,
          title: 'Июнь'
        },
        {
          id: 2,
          title: 'Июль'
        },
        {
          id: 3,
          title: 'Август'
        }
      ],
      list: [],
      allPhotos: {
        troitsk: [
          {
            id: 1,
            path: require('@/assets/events/summer/troitsk/1.jpg'),
            content: {
              title: 'Фольклорный фестиваль «Троицкие гуляния»',
              text: 'На фестивале поют обрядовые песни, угощают традиционными кушаниями кержаков, плетут и отправляют по реке венки, проводят женские обряды кумовства и топление березки. Фольклорное шествие и ритуальные обеды за большим столом захватывают участников и гостей праздника.',
              where: 'с. Топольное, Солонешенский район',
              when: '23 июня 2024 года',
              link: 'admsln.narod.ru'
            }
          },
          {
            id: 2,
            path: require('@/assets/events/summer/troitsk/2.jpg')
          }, {
            id: 3,
            path: require('@/assets/events/summer/troitsk/3.jpg')
          }, {
            id: 4,
            path: require('@/assets/events/summer/troitsk/4.jpg')
          }, {
            id: 5,
            path: require('@/assets/events/summer/troitsk/5.jpg')
          }, {
            id: 6,
            path: require('@/assets/events/summer/troitsk/6.jpg')
          }, {
            id: 7,
            path: require('@/assets/events/summer/troitsk/7.jpg')
          }, {
            id: 8,
            path: require('@/assets/events/summer/troitsk/8.jpg')
          }, {
            id: 9,
            path: require('@/assets/events/summer/troitsk/9.jpg')
          }

        ],
        zemlya: [
          {
            id: 1,
            path: require('@/assets/events/summer/zemlya/1.jpg'),
            content: {
              title: 'Всероссийский фестиваль творчества и спорта им. М.C. Евдокимова «Земляки»',
              text: 'Программа фестиваля объединяет спортивные и творческие события. В селе проходят творческие встречи с известными артистами и кинорежиссерами и посиделки с участием друзей Михаила Евдокимова. На сельском стадионе разворачивается праздник «С легким паром!». Вечерний концерт начинается с победителей Всероссийского фестиваля народного творчества, а завершается программой звезд российской эстрады.',
              where: 'п. Верх-Обский, Смоленский район',
              when: '2-4 августа 2024 г.',
              link: 'еvdokimov.ru'
            }
          },
          {
            id: 2,
            path: require('@/assets/events/summer/zemlya/2.jpg')
          }, {
            id: 3,
            path: require('@/assets/events/summer/zemlya/3.jpg')
          }, {
            id: 4,
            path: require('@/assets/events/summer/zemlya/4.jpg')
          }, {
            id: 5,
            path: require('@/assets/events/summer/zemlya/5.jpg')
          }, {
            id: 6,
            path: require('@/assets/events/summer/zemlya/6.jpg')
          }, {
            id: 7,
            path: require('@/assets/events/summer/zemlya/7.jpg')
          }, {
            id: 8,
            path: require('@/assets/events/summer/zemlya/8.jpg')
          }, {
            id: 9,
            path: require('@/assets/events/summer/zemlya/9.jpg')
          }

        ],
        ah: [
          {
            id: 1,
            path: require('@/assets/events/summer/ah/1.jpg'),
            content: {
              title: 'Гастрономический фестиваль «АХ! Фест»',
              text: 'Ежегодный гастрономический фестиваль вкуса, еды, развлечений и впечатлений!',
              where: 'Долина семейного отдыха «Алтайское Холмогорье», с. Алтайское, Алтайский район ',
              when: '29-30 июня 2024 год',
              link: 'axfest.ru'
            }
          },
          {
            id: 2,
            path: require('@/assets/events/summer/ah/2.jpg')
          }, {
            id: 3,
            path: require('@/assets/events/summer/ah/3.jpg')
          }, {
            id: 4,
            path: require('@/assets/events/summer/ah/4.jpg')
          }, {
            id: 5,
            path: require('@/assets/events/summer/ah/5.jpg')
          }, {
            id: 6,
            path: require('@/assets/events/summer/ah/6.jpg')
          }, {
            id: 7,
            path: require('@/assets/events/summer/ah/7.jpg')
          }, {
            id: 8,
            path: require('@/assets/events/summer/ah/8.jpg')
          }, {
            id: 9,
            path: require('@/assets/events/summer/ah/9.jpg')
          },
          {
            id: 10,
            path: require('@/assets/events/summer/ah/10.jpg')
          },
          {
            id: 11,
            path: require('@/assets/events/summer/ah/11.jpg')
          },
          {
            id: 12,
            path: require('@/assets/events/summer/ah/12.jpg')
          }, {
            id: 13,
            path: require('@/assets/events/summer/ah/13.jpg')
          }

        ],
        cheese: [
          {
            id: 1,
            path: require('@/assets/events/summer/cheese/1.jpg'),
            content: {
              title: 'Гастрономический фестиваль «Сырная деревня»',
              text: 'В селе, где основали старейший сырзавод края, ежегодно устраивают большой сырный праздник – «Сырную деревню». Здесь рай для фанатов сыра и вкусной настоящей еды. Праздничная ярмарка изобилует не только всеми видами сыра. В Куяган везут мед с предгорных пасек, продукты, произведенные на деревенских подворьях, и пантовую продукцию мараловодческих хозяйств.',
              where: 'с. Куяган, Алтайский район',
              when: '10 августа 2024 года',
              link: 'visitaltai.info'
            }
          },
          {
            id: 2,
            path: require('@/assets/events/summer/cheese/2.jpg')
          }, {
            id: 3,
            path: require('@/assets/events/summer/cheese/3.jpg')
          }, {
            id: 4,
            path: require('@/assets/events/summer/cheese/4.jpg')
          }

        ],
        brands: [
          {
            id: 1,
            path: require('@/assets/events/summer/brands/1.jpg'),
            content: {
              title: 'Семейный гастрономический фестиваль «Алтайские бренды. Продукты для здоровья»',
              text: 'Гастрономический фестиваль, на котором представлены все алтайские производители продуктов: от молочной продукции до меда и фитопродукции! Алтайские Бренды -  это возможность познакомиться с теми, кто ежедневно дарит нам самые полезные и вкусные продукты и товары.',
              where: 'г.Барнаул, ПКиО «Изумрудный»',
              when: '24-25 августа 2024 года',
              link: 'vk.com/altaybrand22, altaybrand22.ru'
            }
          },
          {
            id: 2,
            path: require('@/assets/events/summer/brands/2.jpg')
          }, {
            id: 3,
            path: require('@/assets/events/summer/brands/3.jpg')
          }, {
            id: 4,
            path: require('@/assets/events/summer/brands/4.jpg')
          },
          {
            id: 5,
            path: require('@/assets/events/summer/brands/5.jpg')
          }, {
            id: 6,
            path: require('@/assets/events/summer/brands/6.jpg')
          }, {
            id: 7,
            path: require('@/assets/events/summer/brands/7.jpg')
          }

        ],
        katun: [
          {
            id: 1,
            path: require('@/assets/events/summer/katun/1.jpg'),
            content: {
              title: 'Всероссийский фестиваль традиционной культуры «День России на Бирюзовой Катуни»',
              text: 'Выставка-ярмарка «Живое ремесло» и презентация этнокультурных объединений Алтайского края, дегустация блюд национальной кухни, мастер-классы по традиционным ремеслам, играм, танцам от национальных коллективов, знакомство с культурой и бытом народов Алтая. Кульминация фестиваля – хороводное шествие фольклорных школ и праздничный концерт.',
              where: 'ОЭЗ ТРТ «Бирюзовая Катунь», Алтайский район',
              when: '8-12 июня 2024 года',
              link: 'katun-fest.ru'
            }
          },
          {
            id: 2,
            path: require('@/assets/events/summer/katun/2.jpg')
          }, {
            id: 3,
            path: require('@/assets/events/summer/katun/3.jpg')
          }, {
            id: 4,
            path: require('@/assets/events/summer/katun/4.jpg')
          }, {
            id: 5,
            path: require('@/assets/events/summer/katun/5.jpg')
          }, {
            id: 6,
            path: require('@/assets/events/summer/katun/6.jpg')
          }, {
            id: 7,
            path: require('@/assets/events/summer/katun/7.jpg')
          }, {
            id: 8,
            path: require('@/assets/events/summer/katun/8.jpg')
          }
        ],
        kultur: [
          {
            id: 1,
            path: require('@/assets/events/summer/kultur/1.jpg'),
            content: {
              title: 'Межрегиональный фестиваль национальных культур «Перекресток культур» ',
              text: 'На фестивале представят изделия народных мастеров и организуют ремесленные мастер-классы, покажут большую концертную программу и обсудят практики сохранения народных традиций на научно-практической конференции. Центральным событием праздника традиционно станет «Фестиваль вареника»',
              where: 'г. Славгород',
              when: '5-8 июля 2023 года',
              link: 'visitaltai.info'
            }
          },
          {
            id: 2,
            path: require('@/assets/events/summer/kultur/2.jpg')
          }, {
            id: 3,
            path: require('@/assets/events/summer/kultur/3.jpg')
          }, {
            id: 4,
            path: require('@/assets/events/summer/kultur/4.jpg')
          }, {
            id: 5,
            path: require('@/assets/events/summer/kultur/5.jpg')
          }
        ],
        zvenigora: [
          {
            id: 1,
            path: require('@/assets/events/summer/zvenigora/1.jpg'),
            content: {
              title: 'Международный фестиваль бардовской песни «Звенигора»',
              text: 'Несколько сот бардов из Алтайского края, соседних областей, Республики Алтай и Казахстана приезжают в конце лета в палаточный лагерь у озера Колыванского. С вечера до утра лагерь и побережье наполняют вокал и гитарные переборы. Певцов и слушателей угощают ухой и поят душистым травяным чаем. Завершается фестиваль фейерверком, вручением призов всем участникам и концертом.',
              where: 'ДОЛ «Чайка», с. Саввушка, Змеиногорский район',
              when: '25-27 августа 2023 года',
              link: 'visitaltai.info'
            }
          },
          {
            id: 2,
            path: require('@/assets/events/summer/zvenigora/2.jpg')
          }, {
            id: 3,
            path: require('@/assets/events/summer/zvenigora/3.jpg')
          }, {
            id: 4,
            path: require('@/assets/events/summer/zvenigora/4.jpg')
          }, {
            id: 5,
            path: require('@/assets/events/summer/zvenigora/5.jpg')
          }, {
            id: 6,
            path: require('@/assets/events/summer/zvenigora/6.jpg')
          }
        ],
        peschan: [
          {
            id: 1,
            path: require('@/assets/events/summer/peschan/1.jpg'),
            content: {
              title: 'Туристский фестиваль «Песчаная-2024»',
              text: 'В рамках фестиваля проходят первенства Сибирского федерального округа и края по рафтингу и спортивному туризму на водных дистанциях, краевые соревнования по горному и велотуризму, скалолазанию, мото- и парапланеризму, перетягиванию каната.',
              where: 'Урочище «Щеки», р. Песчаная, Смоленский район',
              when: '8-12 июня 2024 года',
              link: 'vk.com/greataltai'
            }
          },
          {
            id: 2,
            path: require('@/assets/events/summer/peschan/2.jpg')
          }, {
            id: 3,
            path: require('@/assets/events/summer/peschan/3.jpg')
          }, {
            id: 4,
            path: require('@/assets/events/summer/peschan/4.jpg')
          }, {
            id: 5,
            path: require('@/assets/events/summer/peschan/5.jpg')
          }, {
            id: 6,
            path: require('@/assets/events/summer/peschan/6.jpg')
          }, {
            id: 7,
            path: require('@/assets/events/summer/peschan/7.jpg')
          }, {
            id: 8,
            path: require('@/assets/events/summer/peschan/8.jpg')
          }, {
            id: 9,
            path: require('@/assets/events/summer/peschan/9.jpg')
          }, {
            id: 10,
            path: require('@/assets/events/summer/peschan/10.jpg')
          }, {
            id: 11,
            path: require('@/assets/events/summer/peschan/11.jpg')
          }, {
            id: 12,
            path: require('@/assets/events/summer/peschan/12.jpg')
          }, {
            id: 13,
            path: require('@/assets/events/summer/peschan/13.jpg')
          }

        ],
        water: [
          {
            id: 1,
            path: require('@/assets/events/summer/water/1.jpg'),
            content: {
              title: 'Массовый рекорд по лежанию на открытой воде «Звезда на Яровом»',
              text: 'Пляжный праздник, в программе которого – конкурсы, детские и взрослые шоу-программы, спортивные соревнования, вечерний концерт звезд российского шоу-бизнеса. Впечатляющий и дважды вошедший в Книгу рекордов России флешмоб на Яровом объединяет свыше двух тысяч отдыхающих. Они одновременно укладываются в позе «звездочки» на поверхность соленого озера.',
              where: 'озеро Большое Яровое, Причал 42, г.Яровое',
              when: '22 июля 2023 г. ',
              link: 'moreyarovoe.ru'
            }
          },
          {
            id: 2,
            path: require('@/assets/events/summer/water/2.jpg')
          }, {
            id: 3,
            path: require('@/assets/events/summer/water/3.jpg')
          }, {
            id: 4,
            path: require('@/assets/events/summer/water/4.jpg')
          }, {
            id: 5,
            path: require('@/assets/events/summer/water/5.jpg')
          }, {
            id: 6,
            path: require('@/assets/events/summer/water/6.jpg')
          }, {
            id: 7,
            path: require('@/assets/events/summer/water/7.jpg')
          }, {
            id: 8,
            path: require('@/assets/events/summer/water/8.jpg')
          }, {
            id: 9,
            path: require('@/assets/events/summer/water/9.jpg')
          }, {
            id: 10,
            path: require('@/assets/events/summer/water/10.jpg')
          }, {
            id: 11,
            path: require('@/assets/events/summer/water/11.jpg')
          }, {
            id: 12,
            path: require('@/assets/events/summer/water/12.jpg')
          }, {
            id: 13,
            path: require('@/assets/events/summer/water/13.jpg')
          }, {
            id: 14,
            path: require('@/assets/events/summer/water/14.jpg')
          }

        ],
        wings: [
          {
            id: 1,
            path: require('@/assets/events/summer/wings/1.jpg'),
            content: {
              title: 'Авиамодельный фестиваль «Крылья Сибири»',
              text: 'Гости фестиваля смогут посетить выставку летательных аппаратов, увидеть показательные выступления парамотористов и шоу пилотажной группы. Фестиваль завершает большая концертная программа.',
              where: 'с. Ребриха, Ребрихинский район',
              when: '22 июля 2023 г. ',
              link: 'visitaltai.info'
            }
          },
          {
            id: 2,
            path: require('@/assets/events/summer/wings/2.jpg')
          }, {
            id: 3,
            path: require('@/assets/events/summer/wings/3.jpg')
          }, {
            id: 4,
            path: require('@/assets/events/summer/wings/4.jpg')
          }, {
            id: 5,
            path: require('@/assets/events/summer/wings/5.jpg')
          }, {
            id: 6,
            path: require('@/assets/events/summer/wings/6.jpg')
          }, {
            id: 7,
            path: require('@/assets/events/summer/wings/7.jpg')
          }, {
            id: 8,
            path: require('@/assets/events/summer/wings/8.jpg')
          }, {
            id: 9,
            path: require('@/assets/events/summer/wings/9.jpg')
          }, {
            id: 10,
            path: require('@/assets/events/summer/wings/10.jpg')
          }, {
            id: 11,
            path: require('@/assets/events/summer/wings/11.jpg')
          }
        ],
        robert: [
          {
            id: 1,
            path: require('@/assets/events/summer/robert/1.jpg'),
            content: {
              title: 'Литературный фестиваль Роберта Рождественского',
              text: 'Разножанровый и мультикультурный фестиваль объединяет поэтические выступления известных литераторов и экскурсии по мемориальному музею поэта и районному краеведческому, фольклорный и рок-фестивали, дегустации национальных кухонь и ярмарку ремесленников в березовой роще на Яру любви. Для детей работают игровая площадка и аттракционы.',
              where: 'с. Косиха (Косихинский район), г.Барнаул',
              when: '21-22 июня 2024 года',
              link: 'culture22.ru'
            }
          },
          {
            id: 2,
            path: require('@/assets/events/summer/robert/2.jpg')
          }, {
            id: 3,
            path: require('@/assets/events/summer/robert/3.jpg')
          }, {
            id: 4,
            path: require('@/assets/events/summer/robert/4.jpg')
          }, {
            id: 5,
            path: require('@/assets/events/summer/robert/5.jpg')
          }, {
            id: 6,
            path: require('@/assets/events/summer/robert/6.jpg')
          }, {
            id: 7,
            path: require('@/assets/events/summer/robert/7.jpg')
          }, {
            id: 8,
            path: require('@/assets/events/summer/robert/8.jpg')
          }, {
            id: 9,
            path: require('@/assets/events/summer/robert/9.jpg')
          }, {
            id: 10,
            path: require('@/assets/events/summer/robert/10.jpg')
          }, {
            id: 11,
            path: require('@/assets/events/summer/robert/11.jpg')
          }, {
            id: 12,
            path: require('@/assets/events/summer/robert/12.jpg')
          }, {
            id: 13,
            path: require('@/assets/events/summer/robert/13.jpg')
          }, {
            id: 14,
            path: require('@/assets/events/summer/robert/14.jpg')
          }

        ],
        shukshi: [
          {
            id: 1,
            path: require('@/assets/events/summer/shukshi/3.jpg'),
            content: {
              title: 'Всероссийский фестиваль «Шукшинские дни на Алтае»',
              text: 'Программа фестиваля включает не только литературные встречи и кинофестиваль, но и народные гуляния. Наиболее плотно и ярко чествование памяти земляка проходит на его малой родине – в селе Сростки, во Всероссийском мемориальном музее-заповеднике В.М. Шукшина. В последний день в селе проходит ремесленная ярмарка и народные гуляния. Кульминацией является художественная программа на горе Пикет у памятника Василия Макаровича.',
              where: 'г. Барнаул, с. Сростки, Бийский район',
              when: '23-27 июля 2024 года',
              link: 'culture22.ru'
            }
          },
          {
            id: 2,
            path: require('@/assets/events/summer/shukshi/2.jpg')
          }, {
            id: 3,
            path: require('@/assets/events/summer/shukshi/1.jpg')
          }, {
            id: 4,
            path: require('@/assets/events/summer/shukshi/4.jpg')
          }, {
            id: 5,
            path: require('@/assets/events/summer/shukshi/5.jpg')
          }, {
            id: 6,
            path: require('@/assets/events/summer/shukshi/6.jpg')
          }, {
            id: 7,
            path: require('@/assets/events/summer/shukshi/7.jpg')
          }, {
            id: 8,
            path: require('@/assets/events/summer/shukshi/8.jpg')
          }, {
            id: 9,
            path: require('@/assets/events/summer/shukshi/9.jpg')
          }, {
            id: 10,
            path: require('@/assets/events/summer/shukshi/10.jpg')
          }, {
            id: 11,
            path: require('@/assets/events/summer/shukshi/11.jpg')
          }, {
            id: 12,
            path: require('@/assets/events/summer/shukshi/12.jpg')
          }, {
            id: 13,
            path: require('@/assets/events/summer/shukshi/13.jpg')
          }, {
            id: 14,
            path: require('@/assets/events/summer/shukshi/14.jpg')
          }, {
            id: 15,
            path: require('@/assets/events/summer/shukshi/15.jpg')
          }, {
            id: 16,
            path: require('@/assets/events/summer/shukshi/16.jpg')
          }

        ],
        beatles: [
          {
            id: 1,
            path: require('@/assets/events/summer/beatles/12.jpg'),
            content: {
              title: 'Музыкальный фестиваль Because of the Beatles',
              text: 'Кавер-версии хитов  «The Beatles» исполняют вживую в разных стилях и жанрах: на главную сцену «Бирюзовой Катуни» выходят сибирские рокеры и джазмены – больше десятка групп из нескольких городов России. Организаторам события удается создать неповторимую атмосферу 1960-х годов для любителей и поклонников творчества «Ливерпульской четверки»',
              where: 'ОЭЗ ТРТ «Бирюзовая Катунь», Алтайский район',
              when: '13 июля 2024 года',
              link: 'beatlesfest22.ru'
            }
          },
          {
            id: 2,
            path: require('@/assets/events/summer/beatles/2.jpg')
          }, {
            id: 3,
            path: require('@/assets/events/summer/beatles/3.jpg')
          }, {
            id: 4,
            path: require('@/assets/events/summer/beatles/4.jpg')
          }, {
            id: 5,
            path: require('@/assets/events/summer/beatles/5.jpg')
          }, {
            id: 6,
            path: require('@/assets/events/summer/beatles/6.jpg')
          }, {
            id: 7,
            path: require('@/assets/events/summer/beatles/7.jpg')
          }, {
            id: 8,
            path: require('@/assets/events/summer/beatles/8.jpg')
          }, {
            id: 9,
            path: require('@/assets/events/summer/beatles/9.jpg')
          }, {
            id: 10,
            path: require('@/assets/events/summer/beatles/10.jpg')
          }, {
            id: 11,
            path: require('@/assets/events/summer/beatles/11.jpg')
          }, {
            id: 12,
            path: require('@/assets/events/summer/beatles/1.jpg')
          }

        ],
        krepost: [
          {
            id: 1,
            path: require('@/assets/events/summer/krepost/1.jpg'),
            content: {
              title: 'Фестиваль военно-исторической реконструкции «Белоярская крепость»',
              text: 'На площадке события организуют интерактивные мультиисторические зоны – ремесленную, гастрономическую и тактическую. Гости фестиваля окунутся в достоверно воссозданный быт минувших веков. Они смогут участвовать в работе гончарной мастерской, стрелять из лука, осваивать технику мечевого боя и наблюдать за средневековыми сражениями реконструкторов из Алтайского края и соседних регионов.',
              where: 'Чуйский тракт,205 км., Первомайский район',
              when: 'июль 2022 г. ',
              link: 'instagram.com/beloyarskaya_krepost/'
            }
          },
          {
            id: 2,
            path: require('@/assets/events/summer/krepost/2.jpg')
          }, {
            id: 3,
            path: require('@/assets/events/summer/krepost/3.jpg')
          }, {
            id: 4,
            path: require('@/assets/events/summer/krepost/4.jpg')
          }, {
            id: 5,
            path: require('@/assets/events/summer/krepost/5.jpg')
          }, {
            id: 6,
            path: require('@/assets/events/summer/krepost/6.jpg')
          }, {
            id: 7,
            path: require('@/assets/events/summer/krepost/7.jpg')
          }
        ],
        flashmob: [
          {
            id: 1,
            path: require('@/assets/events/summer/flashmob/1.jpg'),
            content: {
              title: 'Всероссийская акция «Экскурсионный флешмоб»',
              text: 'Акция для всех, кто интересуется историей и жизнью края. В единый день и единое время стартует множество бесплатных экскурсий, лекций, мастер-классов и творческих встреч.',
              where: 'Алтайский край',
              when: '31 августа 2024 года',
              link: 'excursmob.ru'
            }
          },
          {
            id: 2,
            path: require('@/assets/events/summer/flashmob/2.jpg')
          }, {
            id: 3,
            path: require('@/assets/events/summer/flashmob/3.jpg')
          }, {
            id: 4,
            path: require('@/assets/events/summer/flashmob/4.jpg')
          }, {
            id: 5,
            path: require('@/assets/events/summer/flashmob/5.jpg')
          },
          {
            id: 6,
            path: require('@/assets/events/summer/flashmob/6.jpg')
          }, {
            id: 7,
            path: require('@/assets/events/summer/flashmob/7.jpg')
          }, {
            id: 8,
            path: require('@/assets/events/summer/flashmob/8.jpg')
          }, {
            id: 9,
            path: require('@/assets/events/summer/flashmob/9.jpg')
          },
          {
            id: 10,
            path: require('@/assets/events/summer/flashmob/10.jpg')
          },
          {
            id: 11,
            path: require('@/assets/events/summer/flashmob/11.jpg')
          }, {
            id: 12,
            path: require('@/assets/events/summer/flashmob/12.jpg')
          }
        ],
        kazak: [
          {
            id: 1,
            path: require('@/assets/events/summer/kazak/1.jpg'),
            content: {
              title: 'Открытые международные казачьи игры «Шермиции на Сибирской земле»',
              text: 'Зрители увидят рубку папах и фехтование клинками, метание кинжалов, казачий и рукопашный бой. В рамках игровой программы гости шермиций участвуют в мастер-классах, сдают нормы ГТО, знакомятся с выставкой казачьего оружия и предметов казачьего быта. Праздничный настрой участников и зрителей поддерживают казачьи песни и мелодии военно-духовного оркестра.',
              where: 'с. Павловск (Павловский район)',
              when: 'август 2023 года',
              link: 'vk.com/kazaki22'
            }
          },
          {
            id: 2,
            path: require('@/assets/events/summer/kazak/2.jpg')
          }, {
            id: 3,
            path: require('@/assets/events/summer/kazak/3.jpg')
          }, {
            id: 4,
            path: require('@/assets/events/summer/kazak/4.jpg')
          }, {
            id: 5,
            path: require('@/assets/events/summer/kazak/5.jpg')
          }, {
            id: 6,
            path: require('@/assets/events/summer/kazak/6.jpg')
          }
        ],
        maso: [
          {
            id: 1,
            path: require('@/assets/events/summer/maso/1.jpg'),
            content: {
              title: 'Фестиваль исторических квестов  «Квест фест»',
              text: 'Фестиваль знакомит местных жителей и гостей городов с маршрутами по Барнаулу и Бийску через захватывающие сюжеты игр-путешествий. Формирование команд и прохождение маршрута происходит после электронной регистрации через чат-бот в Telegram.',
              where: 'г. Барнаул, г. Бийск',
              when: '6 июля 2024 года',
              link: 'visitaltai.info'
            }
          },
          {
            id: 2,
            path: require('@/assets/events/summer/maso/2.jpg')
          }, {
            id: 3,
            path: require('@/assets/events/summer/maso/3.jpg')
          }
        ],
        zames: [
          {
            id: 1,
            path: require('@/assets/events/summer/zames/1.jpg'),
            content: {
              title: 'Гастрономический фестиваль мяса «Мясной замес»',
              text: 'Соревнования лучших шеф-поваров Сибири в приготовлении мраморной говядины, пляж, зоны с развлечениями, живая музыка, танцы, и, конечно, же, бесконечно много мяса ждет всех посетителей фестиваля.',
              where: 'п. Дружба, Целинный район',
              when: 'июнь 2024 года',
              link: 'https://vk.com/meetzames'
            }
          },
          {
            id: 2,
            path: require('@/assets/events/summer/zames/2.jpg')
          }, {
            id: 3,
            path: require('@/assets/events/summer/zames/3.jpg')
          }, {
            id: 4,
            path: require('@/assets/events/summer/zames/4.jpg')
          }, {
            id: 5,
            path: require('@/assets/events/summer/zames/5.jpg')
          }, {
            id: 6,
            path: require('@/assets/events/summer/zames/6.jpg')
          }
        ],
        sup: [
          {
            id: 1,
            path: require('@/assets/events/summer/sup/1.jpg'),
            content: {
              title: '«SUPряжение» костюмированный заезд на сапбордах',
              text: 'Костюмированный заезд на дистанцию 1250 метров от пляжа Гребного канала и обратно. Для создания конкурсного образа можно использовать декорации не только в одежде рейдера, но и украшать сам сапборд. Автор самого выразительного костюма определяется по итогам аплодисментов зрителей.',
              where: 'Алтайский край',
              when: '20 июля 2024',
              link: 'visitaltai.info'
            }
          },
          {
            id: 2,
            path: require('@/assets/events/summer/sup/2.jpg')
          }, {
            id: 3,
            path: require('@/assets/events/summer/sup/3.jpg')
          }
        ],
        zakroma: [
          {
            id: 1,
            path: require('@/assets/events/summer/zakroma/1.jpg'),
            content: {
              title: 'Ярмарка натуральной продукции и сельского туризма «Солоновские закрома»',
              text: 'Фрукты, овощи, мясная и молочная продукция, предгорный мед с личных и фермерских подсобных хозяйств – все это ждет посетителей ярмарки. Кроме того, здесь можно приобрести саженцы и семена местных и приглашенных селекционеров, изделия народных умельцев, а также поучаствовать в дегустациях и мастер-классах.',
              where: 'с. Солоновка Алтайский край',
              when: '24 августа 2024 года',
              link: 'altay-solonovka.ru'
            }
          },
          {
            id: 2,
            path: require('@/assets/events/summer/zakroma/2.jpg')
          }, {
            id: 3,
            path: require('@/assets/events/summer/zakroma/3.jpg')
          }, {
            id: 4,
            path: require('@/assets/events/summer/zakroma/4.jpg')
          }, {
            id: 5,
            path: require('@/assets/events/summer/zakroma/5.jpg')
          }
        ]

      }
    }
  },
  methods: {
    openGallery(name) {
      this.list = this.allPhotos[name]
      this.show = true

    },
    back() {
      this.out = true
      setTimeout(() => {
        this.backFromSeason()
      }, 400)
    },
    changeMonth(id) {
      if (this.month) {
        this.out = true
        setTimeout(() => {
          this.out = false
          this.month = id
        }, 200)
      } else {
        this.month = id
      }

    },
    ...mapMutations(['backFromSeason'])
  }
}
</script>

<style lang='scss' scoped>
.main {
  background: url('@/assets/img/seasons/summer.png') center / cover no-repeat;
}

.points {

  .marker:nth-child(1) {
    top: 320px;
    left: 131px;
    display: none;
  }

  .marker:nth-child(2) {
    top: 330px;
    left: 194px;
    animation-delay: 0.2s;
    display: none;
  }

  .marker:nth-child(3) {
    top: 293px;
    left: 794px;
    animation-delay: 0.4s;
    display: none;
  }

  .marker:nth-child(4) {
    top: 630px;
    left: 862px;
    animation-delay: 0.6s;
    display: none;
  }

  .marker:nth-child(5) {
    top: 493px;
    left: 1247px;
    animation-delay: 0s;
  }

  .marker:nth-child(6) {
    top: 235px;
    left: 1215px;
    animation-delay: 0.2s;
  }

  .marker:nth-child(7) {
    top: 182px;
    left: 1293px;
    animation-delay: 0.4s;
  }

  .marker:nth-child(8) {
    top: 252px;
    left: 1332px;
    animation-delay: 0.6s;
  }

  .marker:nth-child(9) {
    top: 601px;
    left: 1285px;
    animation-delay: 0s;
  }

  .marker:nth-child(10) {
    top: 528px;
    left: 1345px;
    animation-delay: 0.3s;
  }

  .marker:nth-child(11) {
    top: 438px;
    left: 1434px;
    animation-delay: 0.1s;
  }

  .marker:nth-child(12) {
    top: 502px;
    left: 1491px;
    animation-delay: 0.6s;
  }

  .marker:nth-child(13) {
    top: 437px;
    left: 1553px;
    animation-delay: 0.4s;
  }

  .marker:nth-child(14) {
    top: 464px;
    left: 1611px;
    animation-delay: 0.2s;
  }

  .marker:nth-child(15) {
    top: 529px;
    left: 1592px;
    animation-delay: 0.1s;
  }

  .marker:nth-child(16) {
    top: 387px;
    left: 1416px;
    animation-delay: 0.1s;
  }


}

.one {
  .event_popup:nth-child(1) {
    top: 653px;
    left: 781px;

    &:before {
      right: -156px;
      top: -20px;
    }

    &:after {

      height: 170px;
      right: -48px;
      bottom: 18px;
      transform: rotate(65deg);
    }
  }

  .event_popup:nth-child(2) {
    top: 417px;
    left: 853px;
    animation-delay: 0.3s;

    &:before {
      right: -156px;
      top: 145px;
    }

    &:after {

      height: 143px;
      right: -64px;
      bottom: -57px;
      transform: rotate(116deg);
    }
  }

  .event_popup:nth-child(3) {
    right: 40px;
    bottom: -31px;
    animation-delay: 0.6s;

    &:before {
      left: 90px;
      top: -100px;
    }

    &:after {

      height: 90px;
      left: 139px;
      top: -70px;
      transform: rotate(-33deg);
    }
  }

  .event_popup:nth-child(4) {
    right: 80px;
    top: 120px;
    animation-delay: 0.4s;

    &:before {
      left: -116px;
      bottom: -63px;
    }

    &:after {

      height: 105px;
      left: -45px;
      top: 93px;
      transform: rotate(-124deg);
    }
  }

  .event_popup:nth-child(5) {
    right: 30px;
    top: 360px;
    animation-delay: 0.2s;

    &:before {
      left: 51px;
      bottom: -83px;
    }

    &:after {

      height: 77px;
      left: 104px;
      top: 130px;
      transform: rotate(-137deg);
    }
  }

  .event_popup:nth-child(6) {
    top: 117px;
    left: 703px;
    animation-delay: 0.3s;

    &:before {
      right: -156px;
      top: 145px;
    }

    &:after {

      height: 143px;
      right: -64px;
      bottom: -57px;
      transform: rotate(116deg);
    }
  }

}

.two {
  .event_popup:nth-child(1) {
    display: none;
    top: 120px;
    left: 81px;
    animation-delay: 0.3s;

    &:before {
      left: 61px;
      bottom: -91px;
    }

    &:after {
      height: 120px;
      left: 138px;
      bottom: -84px;
      transform: rotate(57deg);
    }
  }

  .event_popup:nth-child(2) {
    right: 23px;
    top: 287px;
    animation-delay: 0.2s;

    &:before {
      left: 51px;
      bottom: -83px;
    }

    &:after {
      height: 77px;
      left: 104px;
      top: 130px;
      transform: rotate(-137deg);
    }

    .star {
      content: "";
      display: block;
      width: 48px;
      height: 48px;
      background: url('@/assets/img/icons/star.svg') center / cover no-repeat;
      position: absolute;
      top: -13px;
      left: -260px;
      z-index: 3;

      &:after {
        position: absolute;
        content: "";
        display: block;
        width: 5px;
        background: #fff;
        height: 247px;
        left: 146px;
        top: -50px;
        transform: rotate(-68deg);
      }
    }
  }

  .event_popup:nth-child(3) {
    right: 49px;
    bottom: 0;
    animation-delay: 0.6s;

    &:before {
      left: 90px;
      top: -100px;
    }

    &:after {
      height: 90px;
      left: 139px;
      top: -70px;
      transform: rotate(-33deg);
    }
  }

  .event_popup:nth-child(4) {
    display: none;
    right: 620px;
    top: 60px;
    animation-delay: 0.4s;

    &:before {
      left: -26px;
      bottom: -192px;
    }

    &:after {
      height: 225px;
      left: 50px;
      top: 93px;
      transform: rotate(-154deg);
    }
  }

  .event_popup:nth-child(5) {
    display: none;
    top: 420px;
    left: 21px;

    &:before {
      left: 81px;
      top: -80px;
    }

    &:after {
      height: 80px;
      left: 108px;
      top: -45px;
      transform: rotate(-8deg);
    }
  }

  .event_popup:nth-child(6) {
    display: none;
    right: 50px;
    top: 10px;
    animation-delay: 0.2s;

    &:before {
      left: -31px;
      bottom: -103px;
    }

    &:after {
      height: 147px;
      left: 50px;
      top: 93px;
      transform: rotate(-133deg);
    }
  }

  .event_popup:nth-child(7) {
    top: 460px;
    left: 741px;

    &:before {
      right: -346px;
      top: -49px;
    }

    &:after {
      height: 340px;
      right: -157px;
      bottom: -30px;
      transform: rotate(80deg);
    }
  }

  .event_popup:nth-child(8) {
    top: 460px;
    left: 741px;

    &:before {
      right: -157px;
      top: 49px;
      display: none;
    }

    &:after {
      height: 237px;
      right: -62px;
      bottom: 102px;
      transform: rotate(42deg);
    }
  }

  .event_popup:nth-child(9) {
    top: 160px;
    left: 641px;

    &:before {
      right: -157px;
      top: 49px;
      display: none;
    }

    &:after {
      height: 175px;
      right: -88px;
      bottom: -58px;
      transform: rotate(102deg);
    }
  }
}

.three {
  .event_popup:nth-child(1) {
    top: 246px;
    right: 81px;

    &:before {
      left: 61px;
      bottom: -91px;
    }

    &:after {
      height: 120px;
      left: 138px;
      bottom: -84px;
      transform: rotate(57deg);
    }
  }

  .event_popup:nth-child(2) {
    right: 251px;
    top: 700px;
    animation-delay: 0.2s;

    &:before {
      left: 147px;
      top: -103px;
    }

    &:after {
      height: 97px;
      left: 188px;
      top: -71px;
      transform: rotate(-202deg);
    }

  }

  .event_popup:nth-child(3) {
    display: none;
    left: 649px;
    bottom: 200px;
    animation-delay: 0.6s;

    &:before {
      left: 219px;
      bottom: -100px;
    }

    &:after {
      height: 90px;
      left: 209px;
      bottom: -75px;
      transform: rotate(-33deg);
    }
  }

  .event_popup:nth-child(4) {
    right: 161px;
    top: -24px;
    animation-delay: 0.4s;

    &:before {
      left: -26px;
      bottom: -192px;
    }

    &:after {
      height: 225px;
      left: 50px;
      top: 93px;
      transform: rotate(-154deg);
    }
  }

  .event_popup:nth-child(5) {
    top: 70px;
    left: 821px;

    &:before,
    &:after {
      display: none;
    }
  }

  .event_popup:nth-child(6) {
    display: none;
    left: 550px;
    top: 252px;
    animation-delay: 0.2s;

    &:before {
      right: -202px;
      bottom: 26px;
    }

    &:after {
      height: 207px;
      right: -77px;
      top: -38px;
      transform: rotate(-76deg);
    }
  }

  .event_popup:nth-child(7) {
    right: 661px;
    top: 330px;
    animation-delay: 0.4s;

    &:before {
      right: -24px;
      bottom: -105px;
    }

    &:after {
      height: 84px;
      right: 10px;
      bottom: -77px;
      transform: rotate(-25deg);
    }
  }
}
</style>
