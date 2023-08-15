import React from "react";
import { Element, scroller } from "react-scroll";
import "../styling/ServicesPages.css";

function Services() {
 
    const scrollToPage = (page) => {
      scroller.scrollTo(page, {
        duration: 800,
        delay: 0,
        smooth: "easeInOutQuart",
      });
    };
  

  return (
    <div className="smooth-scroll-container">
      <Element name="page1" className="page page1">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          beatae impedit facere itaque ratione vitae sed esse unde amet
          veritatis, non sit voluptates! Nihil quisquam accusamus veritatis
          nulla rerum alias a dolores quod eligendi consectetur accusantium,
          quis id temporibus labore deleniti reprehenderit. Quae optio cumque
          earum, eligendi reiciendis, ea totam suscipit nesciunt recusandae
          veniam ratione, eum laudantium voluptate iste voluptas. Ab rem
          praesentium hic placeat nulla enim impedit labore, dignissimos, in ad
          quidem provident ipsam et doloribus accusamus consectetur optio
          aliquam eveniet corrupti animi quo vitae sequi. Natus aut ipsam saepe
          animi optio quae aliquam fugiat aliquid consequatur tempora. Atque
          harum quos consequuntur, quia alias assumenda qui inventore? Soluta
          beatae facilis, qui a est quis ipsam iure doloremque doloribus ipsa
          voluptatem odio optio, sunt, tenetur adipisci. Tempore quo rem
          molestiae reprehenderit dolorem molestias laudantium libero? Quae
          officiis eum soluta natus at, earum nihil rem aliquam alias facere,
          corporis id sapiente accusantium eveniet! Laudantium nihil velit quam
          quia corporis aliquam molestias omnis, accusantium sit fuga, officiis,
          consequatur ut. Rerum dolores est, at sequi facilis repellat possimus
          nostrum. Expedita placeat ut modi sint atque reiciendis, recusandae
          perferendis eum accusantium reprehenderit voluptatem repudiandae
          dolore! Nam aliquam facere debitis, inventore error possimus cumque
          recusandae minus, nihil consequuntur minima voluptas esse rem nisi
          libero delectus aspernatur incidunt pariatur fugiat amet voluptatum a
          iure omnis vitae. Et blanditiis consequuntur suscipit quisquam
          eligendi, nesciunt aspernatur perferendis modi repudiandae rerum
          aperiam sunt, impedit error beatae expedita. Laboriosam, quasi quo
          accusantium repellendus mollitia, repudiandae cupiditate dolores,
          inventore quam obcaecati expedita eligendi! Debitis pariatur
          accusantium maxime quos? Aperiam recusandae ipsam hic sequi, debitis
          fuga modi laboriosam delectus porro numquam fugiat iusto ut
          consequatur suscipit voluptatem quasi eaque quod doloribus non nostrum
          nisi cupiditate. Aperiam ipsum, fugiat soluta nisi minima iste ea
          maxime laborum nihil veniam quia obcaecati, ipsa nostrum ratione
          laboriosam tenetur! Odit temporibus voluptatibus fuga mollitia animi
          nihil neque dolor ipsa omnis, dolorum dignissimos, quod error
          explicabo voluptate praesentium earum! Totam provident iusto officia
          consectetur porro deserunt voluptatem molestiae, accusamus, veniam
          delectus quidem repudiandae officiis consequatur ea rerum eos facere
          mollitia pariatur odio laborum neque quae impedit dolor! Repudiandae
          voluptatibus accusamus reprehenderit, consequuntur delectus sed
          blanditiis dolorem, nihil alias explicabo, amet quis rem eaque
          maiores. Adipisci fuga animi mollitia dolore modi cum, repellendus,
          debitis ex maiores dicta doloremque reiciendis beatae temporibus ad ab
          sequi laboriosam cupiditate? Officiis eum perspiciatis totam, officia
          magni natus reprehenderit tenetur voluptatum eos accusamus facilis
          dolorum quasi iusto quidem, cumque corporis nisi quo labore, explicabo
          sint voluptate blanditiis distinctio! Repellat dolore eligendi vel
          facilis quis libero minima dolor est. Autem temporibus possimus
          cupiditate porro molestiae quaerat in recusandae! Ducimus numquam
          iusto magni fugiat fugit obcaecati a voluptatem aspernatur voluptate
          reprehenderit facilis sequi amet laudantium accusamus adipisci libero,
          ipsum doloribus in quidem incidunt ex quae illo ab! Repellendus aut,
          dolorem mollitia quis, fuga culpa officiis magni reiciendis porro
          fugit cumque consequuntur eos sit enim, minima quam ut earum tempore
          non aliquid impedit omnis itaque! Accusamus eos, velit labore
          excepturi iste tempora modi veritatis unde rem laboriosam, cum, cumque
          eum. Ut similique at, atque asperiores nobis nemo molestias minima eum
          illo ea minus perspiciatis porro? Perferendis doloremque quibusdam
          officia atque esse ad velit impedit ut quos repellendus est iste omnis
          reiciendis amet veniam ea, sed beatae? Commodi, mollitia et! Excepturi
          natus officia necessitatibus animi ex voluptate blanditiis incidunt
          nobis sequi quidem corporis ratione tempora reiciendis nulla quos esse
          laudantium reprehenderit ab, similique modi minus. Vero rem recusandae
          sint totam autem, esse dolor eligendi libero ipsum qui expedita
          commodi. Ducimus magni deserunt id, at minus debitis in est
          consequuntur recusandae ratione perspiciatis itaque, accusamus a ipsum
          tempore tempora?
        </p>

        <button onClick={() => scrollToPage('page2')}>See more details</button>

      </Element>
      <Element name="page2" className="page page2">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error hic
          autem nostrum ipsum, maiores fugiat itaque iusto iste harum cum saepe
          ut illo quod accusantium ipsa cupiditate earum omnis minima.
          Doloremque quisquam accusamus optio maxime tenetur sint. Repudiandae
          quod et ducimus possimus nihil vitae blanditiis nemo excepturi illo
          mollitia provident, in necessitatibus impedit enim, ipsam pariatur
          repellat, debitis vel. Sed perferendis consequatur, voluptas
          accusantium ducimus ipsa quidem nisi iure. Harum doloremque omnis
          vitae facere distinctio quasi cum aliquid, quam alias in delectus quo
          eligendi id officia ea, nihil dolor nostrum aut fugit? Exercitationem
          facilis at quod quibusdam modi reiciendis sed provident possimus
          necessitatibus amet delectus, quo architecto, blanditiis quasi
          laudantium corporis eum? Quidem fuga quibusdam similique, numquam,
          reiciendis, et consequuntur accusantium facilis aliquid pariatur
          labore. Quas dignissimos veritatis sapiente expedita sint. Eaque rem
          iste accusamus explicabo quod hic distinctio, velit ipsa unde
          voluptatem, modi magnam quidem repellat provident nemo laborum
          similique excepturi fugit facere aliquam. Ullam quasi soluta, omnis ea
          molestias doloribus natus illum saepe velit! Aliquid nobis alias unde
          veniam, libero natus corporis odio nesciunt. Rerum quas totam fuga
          recusandae quae blanditiis perspiciatis earum possimus aspernatur!
          Corporis esse laboriosam suscipit facilis necessitatibus provident.
          Aperiam at nihil ipsam libero, facilis amet hic harum magnam impedit
          non reprehenderit, soluta alias? Illum ipsa enim, ab nostrum rerum ex
          vitae facere quasi iusto iste architecto quis, corporis, reprehenderit
          incidunt aperiam vero porro dolorem. Magni laboriosam voluptates,
          necessitatibus sit voluptas soluta minus reprehenderit aperiam porro
          magnam id ullam sapiente earum ipsam fuga deleniti aut cumque veniam,
          illo iusto! Iste, eius sunt! Asperiores excepturi fuga sunt quae
          ratione perferendis perspiciatis inventore nam eaque tenetur
          necessitatibus dolorem dolore facilis vero, sapiente repellat saepe
          natus id eveniet, quisquam quas hic. Laudantium itaque beatae, dicta
          ducimus odio earum ipsa magnam, adipisci, inventore incidunt rem neque
          ad necessitatibus? Ab nulla veritatis explicabo suscipit eligendi
          molestias eaque labore, dolores harum, nisi ipsum optio consequuntur
          quae deleniti assumenda doloribus aspernatur nesciunt. Sapiente
          itaque, laborum ea eum nostrum asperiores. Molestias, quae dolorem
          laboriosam laudantium beatae repellat fuga. Beatae deserunt, iste
          ipsum culpa aut ab saepe non. Optio, aspernatur sit. Tenetur autem
          unde accusamus minus, suscipit earum temporibus labore, error illo
          nostrum ducimus voluptatem fugit incidunt dicta? Odit suscipit
          assumenda, velit placeat sint aut ratione expedita. Odio, corrupti
          cumque vitae voluptatum sed eos in accusantium recusandae doloribus ad
          illo quidem inventore, autem quis magni minima, suscipit facere? A id
          nemo nisi alias nihil sit rerum vitae eligendi, eius, corrupti
          distinctio nesciunt quae doloribus. Voluptatem officia maiores dolor
          dolore pariatur placeat, consequatur at, sit corrupti sapiente fugit
          recusandae earum, iste tenetur excepturi nulla inventore eveniet.
          Voluptatibus vero delectus labore aperiam eligendi dolore eius eaque
          officia voluptate ipsum? Quia excepturi eaque laboriosam aperiam
          dolorum ipsum praesentium? Omnis ducimus sed, sit voluptatem,
          voluptates quisquam dicta optio porro assumenda sequi beatae officiis
          nostrum a pariatur dolore veritatis minima impedit distinctio qui
          provident libero ipsam. Perferendis, modi eveniet natus vero quos,
          atque incidunt suscipit repudiandae sint minus, nisi pariatur
          temporibus. Animi, sit incidunt obcaecati quas nostrum consequuntur
          perspiciatis.
        </p>
      </Element>
      <Element name="page3" className="page page3">
        Page 3 content
      </Element>
    </div>
  );
}

export default Services;
