import { useState } from "react";
import Swal from "sweetalert2";
import Celebrity3Image from "../../../assets/img/celebrity-homes/Vijay-Verma-Home-in-Juhu-940x560-1-768x458.png";
import LogoaddImage from "../../../assets/img/Logo-animation.gif";

export default function VijayVerma() {

    const [formData, setFormData] = useState({
        comment: "",
        name: "",
        email: "",
        website: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const res = await fetch("http://localhost:5000/api/comments", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData)
        });

        const data = await res.json();

        Swal.fire({
            title: "Thank You!",
            text: "Your comment has been submitted successfully.",
            icon: "success",
            confirmButtonText: "OK",
        });

        setFormData({
            comment: "",
            name: "",
            email: "",
            website: ""
        });
    };

    return (
        <div className="container py-4 inner_builder1-page p-lg-0">
            {/* Title */}
            <h1 className="inner_page-title">
                Actor Vijay Verma’s Juhu Home
            </h1>
            {/* Main Content */}
            <div className="row">
                {/* LEFT CONTENT */}
                <div className="col-lg-8">
                    <div className="all_innerbanner">
                        {/* Banner Image */}
                        <div className="all_banner mb-4">
                            <img src={Celebrity3Image} alt="img" className="w-100 all_banner_img" />
                        </div>
                        <div className="top-builders-mumbai">
                            <p>Vijay Varma describes himself as a homebody. Away from the overstimulated movie sets, he enjoys his existence in the tranquil backdrop of basic, domestic pleasures. “I enjoy staying at home when I’m not working and catching up on life. It is my natural habitat. I don’t go on vacation very often, so the house should also seem like a vacation home.” He doesn’t have an exact design ethos but appreciates a little fun, color, and a rich gallimaufry of personal possessions loaded with memories and experiences. What appeared to be a fairly standard brief for designers Pria Kanakia and Disha Vakharia of Milan- and Mumbai-based studio Bear Spaces & Co. turned out to be a challenging yet invigorating dare (with a two-month deadline) to provide Vijay with a sanctuary where he thrives, nurtures, reminisces, and rests.
                            </p>

                            <div className="post-image-container image-fit-contain">
                                <img src="http://rustomjeeprojects.in/Mumbai_Homes/wp-content/uploads/2025/11/AD_4nXdlivupRlK4skf33Pv8cDaXJVJT2LYHHK06LaIZjW3_K8w11M6P3jSABs9_CIECFJGrgSvqpdFdZpFblzdyXTL8nkv6q9eGETWEOIbSl0pRFlpUy5f5lxilr_pRsq-eeY5TCeNo_w-980x1024-1.jpg"
                                    className="show-on-desktop img-fluid"
                                    alt="Vijay Varma Home" />
                            </div>

                            <p> Ritika Lalan recreated Jack Penny’s original artwork for the entrance. “I love this piece because it shows different modes of me, who I am, in my comfort zone,” Vijay told me. Josmo sourced the console, which is inspired by the natural pattern of monstera leaves and pays homage to Vijay’s love of plants.                            </p>

                            <div className="post-image-container image-fit-contain">
                                <img src="http://rustomjeeprojects.in/Mumbai_Homes/wp-content/uploads/2025/11/AD_4nXfkr7BfWDQd-JuPtB0YaHgPCj9SbzTwCxJbG-AwDOdPpClX9Y2A56uBzWVbEOk1K7kUNJmXM80tSMLeE6t2tPexgWSc3gE5bJmcHhUoekatsWjb1Cxe4nQIcHoNxIcLkXZA1-Nu7g-965x1024-1.jpg"
                                    className="show-on-desktop img-fluid"
                                    alt="Entrance Artwork" />
                            </div>

                            <p>Vijay Varma, the actor in Murder Mubarak (2024), is in his living room.</p>

                            <p> After months of searching for a new home—an annoying but somewhat hilarious (if you’re patient enough) rite of passage—Vijay found himself an apartment on the 13th floor of a high-rise, and not just any apartment. On one side, it overlooks the busy roads and the concrete skyline, but on the other, it opens up to a vast, lush sea of green. This duality informed the spatial tone, which was inward-looking and tranquil while remaining slightly conscious of its metropolitan edge. Inside, the duo used Frank Lloyd Wright’s compression and release concept, in which a small region leads to a much larger room. The entryway represents a halt. You submit to it the moment you enter. “This narrow, cocooned passage serves as a prelude,” the duo explained. At the same time, it serves as an introduction to Vijay’s passion for art and plants. On the right is a West Elm sinuous mirror that “ensures that Vijay can get ready anywhere and anytime.” The covetable trainer collection, shown on the left wall, is his most valued asset. “I have been collecting trainers since 2018. The first pair was given to me by filmmaker Anurag Kashyap: a New Balance with which I fell in love,” Vijay said enthusiastically.                            </p>

                            <div className="post-image-container image-fit-contain">
                                <img src="http://rustomjeeprojects.in/Mumbai_Homes/wp-content/uploads/2025/11/AD_4nXeY_qUAkImevGAPBzsOjY39wLyws5hNeWS-7P-aZejmHepmNTv7_tgIKiMWAeqlN7ZOnen6UzSYjWd0XaMNZJxTp3L7i2UvbaDNuFP3oR1MI_pKdTVG_TcfJkG0uCOq_0zteH4T-980x1024-1.jpg"
                                    className="show-on-desktop img-fluid"
                                    alt="Living Room" />
                            </div>

                            <p>  Fused corduroy is a prominent textile in the living room. It enhances the complex story by balancing the fun of the objects with the cohesion of the colour scheme. The couch and coffee table are Josmo. Rugberry’s patterned dual-tone rug.                            </p>

                            <div className="post-image-container image-fit-contain">
                                <img src="http://rustomjeeprojects.in/Mumbai_Homes/wp-content/uploads/2025/11/AD_4nXcDSn76xD6GaNoWgL89aiapbwPGg8sarqdVMgOB3imw-k2bSHjfe_V3NI5sGs5810BHVzEAw3tpJZ4kJ4fvr6AX3IwzU-GRb1G7BbTfDV9hFJdcdZHcoNyvooUHID6sRacYZFJ2RQ-997x1024-1.jpg"
                                    className="show-on-desktop img-fluid"
                                    alt="Living Room Texture" />
                            </div>

                            <p> “I just like the idea of terraces and a clear blue sky,” Vijay said of The Calcuttaan’s artworks in the eating area. It’s about being grounded. The dining table, chairs, and console are all from West Elm. West Elm and LMNOH designed the lighting, which gives focus and formality to the already warmly illuminated area.                            </p>
                            <div className="post-image-container image-fit-contain">
                                <img src="http://rustomjeeprojects.in/Mumbai_Homes/wp-content/uploads/2025/11/AD_4nXeqKE93HmtRl8CHwoWLGYohAKyy_1Y88oGrNFQZLuIu1iGqzeDAHQrk-cTNiGnUTb85K1o2J8c28TgFEc6whDfv0h2fpOxP4CtNu1zIyxMvLReOaI6meFjBk6B186TjCec-e83K1Q-925x1024-1.jpg"
                                    className="show-on-desktop img-fluid"
                                    alt="Dining Area" />
                            </div>

                            <p> Vijay insisted on wearing an ethnic kurta pyjama for the interview as a respect to his Hyderabadi ancestry.                            </p>

                            <p> Vijay is enthusiastic—”someone who’s incredibly tuned into his environment,” the designers told me. “He observes the smallest details: the feel of leather, the weight of a ceramic object, the patina of metal over time. Texture is important; therefore, we focused on natural materials, tactile textiles, and slight imperfections. He went on: “I wanted this space to be a little intimate, a little cosy, a little me, with a lot of texture and neutrals.” The living room complements this desire admirably, Vijay quickly fell in love with the Josmo couch’s bonded corduroy texture—”he said it felt like sinking into a cloud”. The couch is the focal point of the house—”I spent a lot of time on this couch: reading, eating, playing video games, and hosting. “It is where life happens.” Similarly, the Josmo coffee table in white ash wood with detachable trays and undulating carvings evokes a sense of relaxation. Stone and textured veneer make a dramatic statement alone, yet sleek metal accents and a sculptural miscellany of furniture create a clean balance against the warmth of the wood. It is all about character.
                                Whether in Hyderabad, Mumbai, or anywhere else in the world, Vijay defines home as a place where his most unrestrained self can be revealed. It draws you in gradually through the vignettes of his trip, resolutely and unpretentiously.                            </p>

                            <div className="post-image-container image-fit-contain">
                                <img src="http://rustomjeeprojects.in/Mumbai_Homes/wp-content/uploads/2025/11/AD_4nXdayfEKhJauN5sFzrV5PWRv2YNGxPA0c8G_CJ7CozJjbtpBE3-3uUjEIkk0F0JMJMojDy6XdXqZZuhaFLROcjt9QDyb2v040oO79eZXxgs3wspGMfGgyqpnajt2dp4BbQ0krFxt7A-1006x1024-1.jpg"
                                    className="show-on-desktop img-fluid"
                                    alt="Vanity Room" />
                            </div>
                            <p>Vijay Varma in his vanity room.</p>
                            <div className="post-image-container image-fit-contain">
                                <img src="http://rustomjeeprojects.in/Mumbai_Homes/wp-content/uploads/2025/11/unnamed.jpg"
                                    className="show-on-desktop img-fluid"
                                    alt="Vanity" />
                            </div>
                            <p>“My personal style bleeds into the space I live in.” In the vanity room, Josmo’s tangy velvet sofa against a backdrop of monochrome striped walls is whimsical and mischievous, an echo of his personality. The accents are expressive. The rug is LJ’s Loops, and the table is LMNOH.
                                Vijay also meticulously placed physical memories throughout the house that had moved from one location to another. He stated, “It’s been almost 20 years since I left home [Hyderabad]. That home has a completely different vibe, but this is my home, and it bears no resemblance to my family home. Apart from pictures, old family albums, and novels, there isn’t much here that reminds me of my home in Hyderabad. I’ve trashed so many items over the previous 20 years that I scarcely have anything left from my past.” That is not to say he does not wish to safely hold both the past and the present. A collection of accumulated objects—some old, some new, some borrowed, and some legally taken off film sets—has a place here. It’s everywhere: a snake prop from Vijay’s first film, Chittagong (2012); an extensive collection of comics by Neil Gaiman and Anupam Sinha; artworks inspired by Wong Kar-wai; a revered portrait gifted by designer Karan Torani; a poster of Bruce Lee from the sets of Jaane Jaan (2023); and, finally, a framed wedding photograph of Vijay Varma and co-star Alia Bhatt from the sets of Darlings (2022). These are not just decorative pieces; they are intended to be touched, turned over, and held.</p>
                            <p>Whether in Hyderabad, Mumbai, or anywhere else in the world, Vijay defines home as a place where his most unrestrained self can be revealed. It draws you in gradually through the vignettes of his trip, resolutely and unpretentiously.</p>

                        </div>

                        {/* ⬇⬇⬇ ADDING BOOTSTRAP 5 COMMENT FORM HERE ⬇⬇⬇ */}

                        <div className="my-5">
                            <h3 className="mb-2">Leave a Reply</h3>
                            <p>Your email address will not be published. Required fields are marked *</p>

                            <form onSubmit={handleSubmit}>

                                <div className="mb-3">
                                    <label className="form-label">Comment *</label>
                                    <textarea
                                        className="form-control"
                                        name="comment"
                                        rows="5"
                                        value={formData.comment}
                                        onChange={handleChange}
                                        required
                                    ></textarea>
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Name *</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Email *</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Website URL</label>
                                    <input
                                        type="url"
                                        className="form-control"
                                        name="website"
                                        value={formData.website}
                                        onChange={handleChange}
                                    />
                                </div>

                                <button type="submit" className="btn btn-primary px-4">
                                    Post Comment
                                </button>
                            </form>
                        </div>

                        {/* ⬆⬆⬆ FORM ENDED HERE ⬆⬆⬆ */}
                    </div>
                </div>
                {/* RIGHT SIDEBAR */}
                <div className="col-lg-4 pe-lg-0 d-none d-lg-block">
                    <div className="add_section sticky-top">
                        <div className="logo_Add mb-4 ">
                            <img src={LogoaddImage} alt="adds Rustomjee" className=" add-img" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
