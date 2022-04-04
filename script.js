let photos = $(".photo").toArray();
let photoBtn = $(".activePhoto").toArray();
let popup = $(".main-popup").toArray();
let photoNo = 0;
$(document).ready(function () {
    $("#ileri").click(function () {
        if (photoNo == photos.length - 1) {
            photoNo = 0;
        }
        else {
            photoNo++;
        }
        photoSıraEkle(photoNo);
        showSlide(photoNo);
        photoSıraSil(photoNo);
    })
    $("#geri").click(function () {
        if (photoNo == 0) {
            photoNo = photos.length - 1;
        }
        else {
            photoNo--;
        }
        photoSıraEkle(photoNo);
        showSlide(photoNo);
        photoSıraSil(photoNo);
    })
    $(".activePhoto").click(function () {
        photoNo = ($(this).index())
        photoSıraEkle(photoNo);
        showSlide(photoNo);
        photoSıraSil(photoNo);
    })


    $("#card1").click(function () {
        $(".about1").html('<img src="Pictures/SpidermanCard.jpg" alt="">')
        popup[0].classList.remove("d-none")
        $(".detailsDiv-title").html("ÖRÜMCEK ADAM EVE DÖNÜŞ YOK")
        $(".about2").html('Örümcek-Adam: Eve Dönüş Yok, Columbia Pictures ve Marvel Studios tarafından ortaklaşa üretilen ve Sony Pictures tarafından dağıtılan, Marvel Comics karakteri Örümcek Adam çizgi romanlarından uyarlanan ABD süper kahraman filmidir. <br> Süre: 2 saat 28 dakika')
    })
    $("#card2").click(function () {
        $(".about1").html('<img src="Pictures/AykutEnisteCard.jpg" alt="" class="card-img-top mb-1">')
        popup[0].classList.remove("d-none")
        $(".detailsDiv-title").html("AYKUT ENİŞTE 2")
        $(".about2").html('Aykut Enişte 2, Gülşah ile evlenme arifesinde olan Aykutun, ailenin eski eniştesinin ortaya çıkmasıyla başından geçenleri konu ediniyor Aykut ve Gülşah’ın düğününe sayılı günler kala ortaya çıkan davetsiz misafir ailedeki tüm dengeleri değiştirir. Çünkü gelen ailenin eski eniştesidir. Aykut iyi niyeti ve saflığı yüzünden başına açılan belalardan kurtulabilecek midir? Yoksa Gülşah’ı kaybetmek üzere midir?')
    })
    $(".main-popup").click(function () {
        popup[0].classList.add("d-none")
    })
})
function photoBtnClick() {
    photoBtn.forEach(e => {
        e.click(function () {
            console.log(e.index());
        })
    });
}
function photoSıraSil(x) {
    for (let i = x + 1; i < photos.length; i++) {
        photoBtn[i].classList.remove("b-red")
    }
}
function photoSıraEkle(x) {
    for (let i = x; i > -1; i--) {
        photoBtn[i].classList.add("b-red");
    }
}
function showSlide(x) {
    for (let i = 0; i < photos.length; i++) {
        photos[i].classList.add("d-none");
    }
    photos[x].classList.remove("d-none");
}

photoSıraSil(photoNo)
showSlide(photoNo);