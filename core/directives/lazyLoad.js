export default {
    inserted: el => {
        function loadImage() {
            const isImg = el.nodeName === "IMG";
            // 이미지 태그일 경우만 url 입력 로딩
            if (isImg) {
                el.src = el.dataset.url;
            }
        }

        function handleIntersect(entries, observer) {
            entries.forEach(entry => {
                if (entry.isIntersecting) { // 감지대상이 교차영역에 진입 할 경우
                    loadImage(); // 교차영역 들어올경우 이미지 로딩
                    observer.unobserve(el); // 이미지 로딩 이후론 관찰할 필요 x
                }
            });
        }

        function createObserver() {

            const observer = new IntersectionObserver(handleIntersect, {
                root: null,
                threshold: "0"
            });

            observer.observe(el);
        }


        window["IntersectionObserver"] ? createObserver() : loadImage();
    }
};

