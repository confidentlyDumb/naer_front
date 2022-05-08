
    export default function openModal (elem, edit = false) {
          let modal = document.getElementById(elem);
  
              elem != "remBlock" || elem != "remTask" || elem != "remWorker"
                                  ? modal.classList.replace('hidden', 'flex')
                                  : modal.classList.remove('hidden');
  
              if (edit) {
                  let fields_from = document.getElementById(edit);
                  let fields      = {
                                      task:   fields_from.getAttribute('data-task'),
                                      worker: fields_from.getAttribute('data-worker'),
                                      field:  fields_from.getAttribute('data-field'),
                                      block:  fields_from.getAttribute('data-block'),
                                      crop:   fields_from.getAttribute('data-crop'),
                                      date:   fields_from.getAttribute('data-date')
                                    };
  
                      for (let key in fields) {
                          modal.querySelector('[name="' + key + '"]').value = fields[key];
                      }
              }
  
              modal.classList.replace('opacity-0', 'opacity-100');
      };