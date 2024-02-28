document.addEventListener("DOMContentLoaded", function () {
  const destinationImages = document.querySelectorAll(".thumb img");
  const largeImage = document.getElementById("popup-img");

  destinationImages.forEach((image) => {
    image.addEventListener("click", function () {
      const imageUrl = this.src;
      largeImage.src = imageUrl;
      openLightbox();
    });
  });
});

function openLightbox() {
  const lightbox = document.getElementById("imageLightbox");
  lightbox.style.display = "flex";
}

function closeLightbox() {
  const lightbox = document.getElementById("imageLightbox");
  lightbox.style.display = "none";
}


function addComment() {
	const commentText = document.getElementById('comment').value;

	if (commentText.trim() === "") {
		alert("Vui lòng nhập nội dung bình luận.");
		return;
	}

	const commentList = JSON.parse(localStorage.getItem('comments')) || [];
	const currentDate = new Date();
	const comment = {
		text: commentText,
		date: currentDate.toLocaleString(),
	};

	commentList.push(comment);
	localStorage.setItem('comments', JSON.stringify(commentList));
	displayComments();

	document.getElementById('comment').value = "";
}

function displayComments() {
	const commentList = JSON.parse(localStorage.getItem('comments')) || [];
	const commentsContainer = document.getElementById('comments-list');

	commentsContainer.innerHTML = "";

	if (commentList.length === 0) {
		commentsContainer.innerHTML = "<p>Chưa có bình luận nào.</p>";
	} else {
		commentList.forEach(comment => {
			const commentElement = document.createElement('div');
			commentElement.classList.add('comment');
			commentElement.innerHTML = `<h4>${comment.date}</h4><p>${comment.text}</p>`;
			commentsContainer.appendChild(commentElement);
		});
	}
}
displayComments();
