const ReadEmail = ({display, handleFav}) => {
    const date = new Date(display.date);
    return (
        <div className="flex w-full gap-6 p-5">
            <img src="./M.png" alt="" className="w-10 h-10 rounded-full"/>
            <div className="flex flex-col gap-3 p-3 w-full">
                <div className="flex justify-between">
                    <h1 className="text-3xl font-bold">{display.subject}</h1>
                    <button onClick={() => handleFav(display.id-1)} className="pr-3 pl-3 pt-1 pb-1 bg-pink-400 rounded-full text-white font-bold">Make as favorite</button>
                </div>
                <span>{date.toLocaleString()}</span>

                <p>{display.short_description} Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quae, hic corporis voluptatibus quo molestias eos, alias dolorum similique quod ullam at. Unde veritatis assumenda in tempore maiores sit architecto.
                Deleniti architecto vitae consequuntur? Voluptas tempora maxime illum adipisci itaque nemo recusandae, quia quidem quod ipsam, omnis nulla et alias? Expedita non sequi a quam illum reprehenderit quos sunt voluptatum?
                Tenetur pariatur repellendus vitae repudiandae consequuntur maxime sint omnis autem! Odio pariatur impedit alias minus quas optio, in excepturi quos vel laudantium, ipsa quidem, iusto ratione sunt laboriosam totam reiciendis?
                Obcaecati nam error quas! Officiis quibusdam delectus sapiente tempora mollitia, quaerat harum inventore deleniti, unde ab quidem iure autem accusantium quia hic neque quasi aspernatur fuga aperiam. Earum, reiciendis quidem!
                Magnam consequuntur voluptatum neque hic nesciunt ducimus placeat cum aspernatur impedit aliquid dignissimos quia error perspiciatis maiores mollitia ipsam accusamus id alias, dolores quas pariatur. Voluptatum et ea quo quia?
                Eveniet voluptatibus deserunt laboriosam, magni, minima quidem maiores omnis assumenda eius quas praesentium saepe non qui fuga commodi beatae veritatis odit. Nobis iure sint, maiores expedita porro natus magni corporis.
                Aliquid blanditiis iusto quaerat. Amet ducimus quia atque laboriosam nobis voluptate ad corporis blanditiis perspiciatis! Exercitationem quos saepe dolore? Reiciendis aliquam voluptatem odio excepturi vel veniam obcaecati voluptas porro eius!
                Ipsa aperiam praesentium expedita ex eum exercitationem iusto laborum alias dolores! Veritatis aspernatur, earum numquam nisi culpa libero ipsam eos quibusdam quia ipsum recusandae illo, perspiciatis deserunt. Distinctio, doloremque exercitationem?
                Explicabo quod, velit blanditiis quis ipsa quam amet sed. Quod saepe fugiat soluta, nihil sed magnam, neque ipsum, at dolorum nemo hic velit quos ex placeat minima molestiae cum vel.
                Cumque, consectetur? Minima quia distinctio beatae quibusdam, doloribus itaque explicabo! Corporis possimus esse architecto molestias, ab expedita eius! Odit aliquam tempora nihil nobis vel dolorum necessitatibus provident laborum. Architecto, sequi?
                Accusantium, consectetur exercitationem! Inventore saepe quaerat adipisci animi ab, similique in autem laboriosam nam ratione illo temporibus qui quidem veritatis! Veniam qui aliquid molestias ab laboriosam obcaecati, assumenda aut quia?
                Doloribus mollitia iusto dolore maxime sint explicabo itaque, nisi libero atque aliquam sequi officia! Sunt similique quisquam numquam aut illum! Distinctio temporibus corporis perferendis voluptate laboriosam sint quam ipsa obcaecati.
                At iure quod inventore fugit eum, dolorem itaque vitae? Qui quaerat corporis iure reiciendis? Facilis aliquam id sequi, aspernatur ipsa eveniet deserunt neque quod exercitationem, culpa saepe obcaecati voluptates maiores.
                Consequatur ea doloribus ipsam quo suscipit asperiores, nemo, molestias nisi placeat debitis officia. Ratione mollitia atque fuga quaerat perspiciatis modi ducimus porro repellendus? Obcaecati rem, quam perspiciatis iusto quis esse.
                Nihil alias, veritatis animi nesciunt quaerat repellendus sapiente temporibus obcaecati pariatur eveniet iste esse quibusdam quam vero exercitationem expedita quidem! Quod dolore odio libero natus facere alias porro illo dicta.
                Veniam vitae dolores corporis porro maxime. Doloremque soluta, animi repudiandae beatae quod nam culpa ipsa quos, aperiam sint provident quidem quo reiciendis magni eius consequuntur fuga asperiores, veniam atque debitis.
                At enim, repellat accusantium sit laudantium, consectetur ipsam perspiciatis nesciunt iusto adipisci reprehenderit, necessitatibus ad aut placeat cumque ratione? Sit, esse praesentium consequuntur commodi temporibus eaque facere optio molestias perferendis.
                Reiciendis, voluptatum similique. Odit nam quidem nisi autem repellendus blanditiis natus facilis similique laudantium obcaecati libero quae modi odio dignissimos laboriosam voluptatibus, sequi eius quisquam deserunt atque ullam. Voluptates, ab!
                Magnam laboriosam molestias voluptatibus eius! Ipsa, odit, praesentium perspiciatis mollitia excepturi quas ad, consequuntur facilis nisi architecto debitis fugit nam. Debitis possimus quia tempore praesentium temporibus delectus harum cumque veritatis?
                Ad beatae nostrum earum corporis totam aperiam voluptas est adipisci, odit amet quas atque veniam doloribus sequi quia placeat esse quam quidem voluptate labore possimus reiciendis similique eius odio. Sit?
                Fugiat, sit? Vel amet laudantium neque officiis quibusdam quaerat asperiores adipisci hic illum cum! Eum aliquid molestias, a fugiat libero architecto doloremque. Mollitia ullam illo aspernatur doloribus quis praesentium laudantium.
                Cumque quisquam nisi rerum et fuga placeat dolore, tempore iure aperiam, deserunt expedita repudiandae modi totam doloribus eligendi reiciendis numquam itaque a obcaecati corporis suscipit eius veniam alias tenetur. Vero!
                Deserunt, dolor. Quo dicta fugiat voluptatibus architecto cupiditate pariatur nihil dolorem, ipsa, sapiente id similique adipisci optio veniam totam repudiandae eveniet commodi officia deleniti maxime eaque consectetur ipsam. Ad, corporis!
                Eligendi optio, enim accusantium repudiandae dolorum assumenda? Laboriosam veniam inventore voluptate voluptatem doloribus ut, porro laborum, quam itaque eos nostrum soluta distinctio, explicabo magnam impedit commodi quasi recusandae et. Assumenda!
                Quae ipsa soluta quas! Consequatur voluptatem numquam ducimus, quidem optio eos excepturi incidunt sapiente neque dolore impedit tenetur rerum mollitia fugit iste non repellendus ipsum fugiat recusandae, corporis placeat distinctio?
                Veniam hic quibusdam possimus ea sed rerum tenetur sapiente inventore exercitationem, magni quae aspernatur error, perferendis saepe magnam atque molestias quidem doloribus sequi labore nobis assumenda nam unde! Veritatis, natus.
                Commodi ipsa cum veniam dolor architecto velit tenetur perferendis ea debitis aperiam aut voluptatibus, laboriosam vitae unde assumenda adipisci veritatis explicabo ipsum, illum eligendi, quibusdam nesciunt. Possimus voluptatem pariatur facere.
                Autem, assumenda velit eligendi consectetur fugit minima molestiae quisquam nostrum similique ipsa delectus impedit repudiandae. Aliquid, veniam tempora! Nulla quas corrupti inventore nihil labore a laborum dolore ex veniam eos?
                Illo non ex suscipit voluptate recusandae, totam blanditiis labore saepe incidunt? Nostrum, debitis quibusdam eius ipsam error veritatis labore ut vitae nihil nisi ipsum consequuntur corrupti aliquam odit magni quis.
                Iusto reprehenderit sit corrupti eum dolorum quisquam recusandae laudantium? Perferendis beatae maiores unde id neque amet at iusto excepturi adipisci dolores vitae voluptas repudiandae dolore corrupti atque provident, obcaecati dicta.
                Odit, a officia aliquid ab temporibus praesentium natus consequatur, nesciunt maxime facere dolorum! Ratione ea impedit, maxime sapiente nihil iste. Quis aspernatur dicta saepe voluptates, repudiandae illum reiciendis dignissimos ullam.
                Dicta quia tenetur commodi animi porro eligendi quasi illum quod minus repellendus fuga explicabo excepturi quas temporibus libero nemo expedita, tempora consequuntur architecto ipsam. Cumque ipsa provident assumenda laudantium. Porro.
                Illo quis mollitia totam repellat. Dolorum, asperiores. Pariatur rem eius id illo consequuntur quibusdam, nulla soluta deleniti alias repellat sunt nam molestiae tenetur dignissimos cumque maiores cum mollitia, assumenda tempora.
                Nobis cupiditate natus accusamus rerum nesciunt placeat eveniet, fugiat aperiam eius impedit ipsam! Dignissimos deserunt excepturi esse corrupti facere quam ea tempore repudiandae, repellat fugiat? Aspernatur, magnam vitae! Ut, laudantium!
                Nesciunt, praesentium. Repudiandae totam voluptate quaerat voluptatem fuga, molestias commodi accusantium asperiores culpa debitis nostrum laudantium vel eum deserunt molestiae nulla non corporis libero. Sunt mollitia recusandae molestiae commodi quae.
                Rerum nostrum, quod ratione omnis maiores, laborum suscipit doloribus, doloremque ducimus minus laudantium debitis! Suscipit deserunt iusto ea, totam repellendus iure ipsum, distinctio ex ad sequi aliquam laboriosam consequuntur quia?
                Quo repellat pariatur explicabo suscipit a recusandae ipsam eius? Nihil error sint ab? Repellendus doloribus amet inventore! Necessitatibus aperiam perferendis voluptate hic, praesentium repellendus tenetur atque dicta sapiente alias eaque?
                Aspernatur eligendi animi unde, debitis corrupti eaque laborum, iste sunt dolorum fuga eum tempora. Ipsum dolore magnam porro atque laborum. Facere illo molestias distinctio asperiores perferendis, recusandae beatae quas dignissimos.
                Placeat ut natus suscipit deserunt voluptas quas sapiente beatae ea perferendis, perspiciatis, tempora maiores ab temporibus, alias ipsum consequatur eius ipsa delectus laborum? Voluptates voluptatibus, alias expedita et iusto saepe!
                Voluptate saepe odio sapiente necessitatibus similique sequi qui magnam animi unde consequatur iusto consequuntur voluptatibus ut aliquid hic voluptas, reiciendis iure exercitationem cumque odit rem repellendus perferendis nisi? Aperiam, esse.
                Quaerat mollitia repellendus voluptatum? Ut porro nihil facere quidem ipsam expedita sed magnam ducimus odio, corporis tenetur quam explicabo voluptas, nam natus ad tempora illo, aliquam libero temporibus sit asperiores.
                Qui error rerum quod tempora repellendus laborum distinctio eaque necessitatibus voluptas cum, doloremque eum quos nostrum earum dolor adipisci hic dolorem quas mollitia. Iste, ipsum cumque modi iusto dolorem vitae!
                Explicabo perspiciatis obcaecati facere corporis officia dicta voluptatem qui fugiat rerum at sint, aperiam, tenetur consequuntur molestias quam ad voluptatibus blanditiis possimus earum! Eveniet error quos est repudiandae aut voluptates.
                Deserunt accusamus reiciendis ut, doloribus obcaecati molestiae porro itaque, nulla perferendis cumque provident? Nihil molestias commodi, ut mollitia beatae recusandae, voluptatibus eius ipsam vero, dolorem porro et sed. Vitae, magnam.
                Consectetur autem voluptatem ad velit officiis perferendis adipisci, impedit amet consequatur ipsa libero dolor, facere suscipit perspiciatis harum quos quisquam asperiores consequuntur, expedita enim. Ducimus inventore laboriosam nihil tempore iure.
                Alias est aperiam ipsa tenetur adipisci, earum repellendus quod soluta obcaecati laborum doloremque ipsam non ullam sed saepe eveniet dolorum, voluptate excepturi! Voluptatem praesentium laborum fugit sequi reprehenderit, sapiente fuga?
                Adipisci hic reprehenderit quasi ullam saepe ab in nisi esse velit ipsa quidem magnam, incidunt, recusandae voluptatem assumenda. Blanditiis sequi reiciendis ratione distinctio enim quaerat nihil velit quas, inventore ipsa?
                Libero sunt officiis quidem temporibus commodi eveniet ducimus dolorem fuga alias, quae voluptates in asperiores doloremque recusandae quaerat deleniti. Ipsa necessitatibus dolor animi molestiae eos. Voluptatem minus at excepturi nulla!
                Voluptatum quod, at laudantium quos temporibus fugiat enim est inventore expedita nemo harum quia explicabo eaque error laboriosam quo distinctio adipisci omnis accusantium vero fuga dicta esse architecto. Vitae, magnam.
                Porro, harum! Voluptatem commodi quidem cumque accusamus aut, assumenda asperiores fugit tempora eius ratione nulla perferendis est nobis aliquam labore quis. Placeat, dicta! Esse assumenda fugiat est vel accusamus quaerat.</p>
                
            </div>
        </div>
    );
}
export default ReadEmail;