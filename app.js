function nextSlide() {
    const title = document.getElementById('main-title');
    const desc = document.getElementById('main-desc');

    title.innerText = "Breif Introduction";
    desc.innerText = "What is Computer Hardware?A Computer hardware refers to the physical, tangible parts of a computer system that you can see and touch, including internal components like the CPU, motherboard, RAM, and storage drives, and external peripherals like the monitor, keyboard, and mouse, all working together under the direction of software to perform tasks. Hardware provides the foundation for software to run, enabling functions like data processing, storage, input, and output. "

    const contentArea = document.getElementById('content-area');
    contentArea.style.opacity = 0;

    setTimeout(() => {
        contentArea.style.opacity = 1;
        contentArea.style.transition = "opacity 0.5s";
    }, 50);
}