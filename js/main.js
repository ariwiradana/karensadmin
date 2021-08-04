$(document).ready(() => {
	jobType();
	jobMatched();
});


const jobType = () => {
	let data = [
		['Remote', 'uil-coins'],
		['Freelance', 'uil-invoice'],
		['Full Time', 'uil-clock'],
		['Part Time', 'uil-suitcase']
	];

	$.each(data, (i, obj) => {
		$('.job-type').append(`
        <div class="card card-secondary card-job-type" data-text="${obj[0]}">
          <div class="card-body d-flex f-column ai-center">
            <i class="uil ${obj[1]} icon-xl text-primary"></i>
            <div class="body-text text-dark">${obj[0]}</div>
          </div>
        </div>
    `);
	});
}

const jobMatched = () => {

	const thousand = (x) => {
		return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	}

	$.ajax({
		url: `https://api-karens-house.000webhostapp.com/read-gallery-images.php`,
		dataType: 'json',
		type: 'get',
		success: (response) => {
			if (response.status_code == 200) {
				console.log(response.data)
				$.each(response.data, (i, obj) => {
					const row = `						
						<div class="card card-light shadow mb-1">
							<div class="card-body">
								<div class="job-match-header">
									<div class="job-match-header-item">
										<div class="job-matched-header-img-container">
											<img src="https://api-karens-house.000webhostapp.com/uploads/gallery/${obj.filename}" alt="" class="job-matched-img">
										</div>
										<div class="h4 fw-semi-bold text-capitalize">${obj.jenis}</div>
									</div>
									<div class="job-match-header-item">
										<button class="btn-circle btn-circle-xs btn-outline-secondary"><i class="uil uil-bookmark"></i></button>
									</div>
								</div>
								<div class="d-flex jc-between ai-center mt-1">
									<div class="d-flex f-column">
										<div class="body-text fw-semi-bold text-dark text-capitalize">${obj.jenis}</div>
										<p class="body-text">Total salary <span class="salary">$${obj.jenis}</span></p>
									</div>
									<a data-fancybox href="https://api-karens-house.000webhostapp.com/uploads/gallery/${obj.filename}">
										<button class="btn btn-sm btn-primary">View</button>
									</a>
								</div>
							</div>
						</div>`;

					$('.job-matched').append(row);
				})
			}
		}
	})
}