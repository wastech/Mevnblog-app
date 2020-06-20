<template>
<div>
  <div class="container">
    <div class="row">
      <div class="col-sm-12" v-for="(item, index) in items" :key="index">
        <div v-if="proId == item.productId">
          <h2>{{ item.title }}</h2>
          <img :src="item.image" />
          <h5>{{ item.category }}</h5>
          <p>{{ item.text }}</p>
        </div>
      </div>
    </div>

    <Related />
  </div>
</div>
</template>

<script>
import Related from "@/components/Related.vue";
import Newsletter from "@/components/Newsletter.vue";
export default {
  name: "viewpost",
  components: {
    Related,
    Newsletter,
  },
  data() {
    return {
      proId: this.$route.params.Pid,
      items: [{
          productId: 1,
          category: "blog post",
          image: "https://image.freepik.com/free-photo/smiley-man-liking-idea-with-copy-space_23-2148221727.jpg",
          title: "Photo Of Man Who Was Nabbed For Stealing Newborn Baby's Placenta In Ogun",
          text: "A 43-year-old man, Joshua Abraham, has been arrested by policemen in Ogun State for allegedly stealing his neighbour’s baby placenta.The suspect was alleged to have gone to the hospital, where the baby was delivered, and claimed to be the father and collected the placenta from the nurse.He was, however, busted when the baby’s grandmother, Raliha Zakara, got to the hospital and upon her request for the placenta, she was told that Abraham had taken it away.The Police Public Relations Officer in the state, Abimbola Oyeyemi, explained in a statement on Thursday that the suspect was arrested following a report by Raliha at the Ibafo Police Station.The PPRO stated, “The suspect, who is a neighbour to Raliha, came to the hospital, where Raliha’s daughter was delivered of the baby, and pretended to be the father of the newborn.",
        },
        {
          productId: 2,
          category: "blog post",
          image: "https://image.freepik.com/free-photo/portrait-smiling-young-man-eyewear_171337-4842.jpg",
          title: "10 Lovely Things You Can Give Your Partner as Valentine Gift (No. 3 is Super Romantic",
          text: "Valentine is here. It is another season for lovers to exchanged gifts and renew their vows. Previously, we have had our partners display their love for us with gifts that are unromantic. It is either boxers for guys or shawarma for ladies as they are always after going out and all. Here are 10 Lovely Things You Can Give Your Partner as Valentine Gift.Valentine day is special as it comes once every year. Few days from now, on February 14th, we shall be celebrating another lovers day, exchanging gifts and reigniting their relationships.Thus we need to device new means to celebrate our loved ones and buy them gifts they never expected. That your lover loves going the cinema or eating pizza doesn't mean you must take her to see a movie or get her pizza on valentines day. You need to surprise her. Give her something you haven't given her before,take her where she has never been to. By all mean, create a new memory this valentine.This is why we have gathered 10 Lovely Things You Can Give Your Partner as a Valentine Gift.1. PerfumesAffordable and sweet flavored perfumes could be all you need to spice up your partners day and them them smiling. They are common but actually mean a lot most especially when the best of perfumes are being given.2. Wrist watcWon't you be glad to get a perfume from your spouse, boyfriend or girlfriend? Of course you will. If you can't afford gold, silver or the richard mille branded wrist watches, the exceptional ones sold on the streets could go a long way to light up your partners day.",
        },
        {
          productId: 3,
          category: "blog post",
          image: "https://image.freepik.com/free-photo/happy-young-man-pointing-his-finger-against-yellow-backdrop_23-2148119753.jpg",
          title: "“I have grown” – Yvonne Jegede says as she shares stuns in new photo",
          text: "Nigerian actress Yvonne Jegede reveals how much progress she has made in her life, after learning to live stress-free. The mom of one wrote the message below on her Instagram page, sharing a photo of herself rocking a lovely animal-skin dress.The actress who has always been subjected to insult from internet trolls revealed that she has outgrown most of the things she’s been called out for in recent times.The 36 year old movie star was formerly married to Olakunle Fawole, but the duo went their separate ways after the marriage couldn’t be reconciled. Yvonne became famous after featuring in 2Baba’s ‘African Queen’ musical video alongside Annie Macaulay",
        },
        {
          productId: 4,
          category: "blog post",
          image: "https://image.freepik.com/free-photo/beautiful-girl-stands-near-walll-with-leaves_8353-5378.jpg",
          title: "NairaMarley, Babatunde Gbadamosi, write apology letters to Gov. Sanwo-Olu, for violating the social distancing order",
          text: "Singer Azeez Fashola aka Naira Marley and politician, Babatunde Gbadamosi, have apologized to Lagos state governor, Babajide Sanwo-olu, in a new letter where they addressed the governor after they violated the social distancing order of the state when they attended the house party organised by actress Funke Akindele and her hubby, JJCSkillz, on Sunday April 5Following their arrest and prosecution for attending Funke Akindele’s party, the court passed their judgment few days ago. Naira Marley who was represented by the daughter of K1 de Ultimate, Barrister Damilola Ayinde Marshal, was given 3 conditions to fulfill as his punishment.The state government decided to withdraw the case asked him to do the following;1. letter of apology to Lagos state government.2. an undertaking never to commit such offense.3. 14 days self-isolationAll three defendants have since tendered their apology letters to the state governor.",
        },
        {
          productId: 5,
          category: "blog post",
          image: "https://image.freepik.com/free-photo/cropped-image-handsome-afro-american-sports-man-rubbing-hands-with-chalk_171337-9260.jpg",
          title: "Banky W slams state governments that have suspended the lockdown to celebrate easter",
          text: "Banky W has slammed state governments who have decided to suspend the lockdown orders to celebrate the Easter holiday.Some state governments in the country announced their decision to suspend the lockdown to enable Christians to celebrate the Easter holiday. They also urged Muslims to observe Jumaat prayers on Friday and also encouraged all Christians to have Easter church services with their full congregation on Sunday.Banky W reacted to the news via his Twitter page where he slammed them for making such a dangerous decision to relax the restrictions order despite the spread of the coronavirus. He wrote: “So for the State Governments that have suspended isolation & social distancing for Easter… do they have an agreement with the Coronavirus that it will also go on Easter break as well? These our “leaders” sha. Kai.”",
        },
        {
          productId: 6,
          category: "blog post",
          image: "https://image.freepik.com/free-photo/happy-young-african-man-showing-display-laptop_171337-9686.jpg",
          title: "Ekiti state discharges second Coronavirus patient",
          text: "A second covid-19 patient has been discharged in Ekiti state. This was made known to the public in a recent announcing by Governor Kayode Fayemi of Ekiti State. Fayemi made this announced on his official Twitter page. He said that the patient was discharged after testing negative for the second time.“Our second COVID-19 patient tested negative the second time and was discharged from our Infectious Disease Hospital today. While thanking our team for a job well done, the job is not finished. #StayHomeSaveLives. JKF,” Governor Fayemi tweetedThe 42-year-old patient who was said to have contracted the virus in Lagos, was isolated and treated at the isolation centre for 10 days after testing positive for the coronavirus. This brings to two the number of Coronavirus patients that have recovered and discharged.",
        },
        {
          productId: 7,
          category: "blog post",
          image: "https://image.freepik.com/free-photo/confident-beautiful-brunette-girl-looking-camera-smiling-white-wall_176420-565.jpg",
          title: "aremu",
          text: "Banky W has slammed state governments who have decided to suspend the lockdown orders to celebrate the Easter holiday.Some state governments in the country announced their decision to suspend the lockdown to enable Christians to celebrate the Easter holiday. They also urged Muslims to observe Jumaat prayers on Friday and also encouraged all Christians to have Easter church services with their full congregation on Sunday.Banky W reacted to the news via his Twitter page where he slammed them for making such a dangerous decision to relax the restrictions order despite the spread of the coronavirus. He wrote: “So for the State Governments that have suspended isolation & social distancing for Easter… do they have an agreement with the Coronavirus that it will also go on Easter break as well? These our “leaders” sha. Kai.”",
        },
        {
          productId: 8,
          category: "blog post",
          image: "https://image.freepik.com/free-photo/portrait-beautiful-brunette-woman-model-pink-costume-with-no-makeup-isolated-gray_158538-12804.jpg",
          title: "President Buhari's Easter Message To Nigerians Amidst Coronavirus Pandemic",
          text: "President Muhammadu Buhari has acknowledged that the celebration of Easter in a subdued manner as a result of the COVID-19 pandemic is unusual and very unfortunate.The president, however, urged all Christians to imbibe and live the values of humility, discipline, perseverance, sacrifice and obedience which Jesus Christ demonstrated during His stay on earth.President Buhari, in an Easter Message to Nigerians on Friday, says the nation shall pull through this “most difficult trial” brought by the Covid-19 pandemic disease if all Christians in particular, and Nigerians in general, continue to have faith and hope in intensified prayers backed by personal and collective responsibility.",
        },
        {
          productID: 9,
          category: "blog post",
          image: "https://image.freepik.com/free-photo/portrait-cheerful-young-african-man_171337-8907.jpg",
          title: "Horror! Huge Fire Breaks Out, Razes Vehicles Inside Lagos Airport Hotel (Photos)",
          text: "There was a fire incident at the premises of Ikeja Airport Hotel in Lagos on Thursday nightThree vehicles were affected during the outbreak which did not affect the hotel building according to reports.A Toyota coaster bus with number plate, LND133XW; a Honda civic saloon car with number plate, AKR234LZ; and a Cadillac Escalade car with an unknown registration number were affected.",
        },
        {
          productId: 10,
          src: "https://image.freepik.com/free-photo/smiling-young-businessman-businesswoman-giving-high-five-front-corporate-building_23-2148190731.jpg",
          category: "Blog Post",
          title: "post ",
          text: "dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,",
        },
      ],
    };
  },
};
</script>

<style scoped>
.col-sm-4 {
  height: 25rem;
}

.container {
  margin-top: 0.5rem;
}

h2 {
  text-align: center;
  text-transform: uppercase;
  font-size: 2rem;
  margin: 1rem;
  font-weight: bolder;
  font-family: serif;
}

p {
  font-weight: bolder;
  font-family: courier, Arial, Helvetica, sans-serif;
  width: 80%;
  margin: 0 auto;
}

img {
  width: 100%;
  height: 20rem;
  object-fit: cover;
}

h1 {
  font-size: 2rem;
  font-weight: bolder;
}

h5 {
  color: blue;
}

button {
  border-radius: 0.7rem;
}

@media screen and (max-width: 750px) {
  img {
    width: 100%;
    height: 10rem;
  }

  h2 {
    text-transform: uppercase;
    font-size: 0.7rem;
    margin: 1rem;
    font-weight: bolder;
    font-family: serif;
  }
}
</style>
