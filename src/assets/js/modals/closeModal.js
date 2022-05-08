export default function closeModal (elem) {
    let modal = document.getElementById(elem);

        elem != "remBlock" || elem != "remTask" ? modal.classList.replace('flex', 'hidden')
                                                : modal.classList.add('hidden');
        modal.classList.replace('opacity-100', 'opacity-0')
}