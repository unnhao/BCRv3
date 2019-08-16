import mock from '@/mock/mock'

setTimeout(()=>{
    mock.emit('test', 'core')
}, 3000)