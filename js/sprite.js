const createSprite = (selector) => {
    const $el = $(selector)

     frames = [
        'frame1', 'frame2', 'frame3', 'frame4',
        'frame5', 'frame6', 'frame7', 'frame8', 'frame9'
    ]

    let current = 0
    const last = frames.length -1

    $el.addClass(frames[current])

    const moveFrame = (from, to) => {
        $el.removeClass(from)
            .addClass(to)
    }

    const hasNext = () => current + 1 <= last


    const nextFrame = () => {
        if(hasNext()) moveFrame(frames[current], frames[++current])

    }

    const reset = () => {
        $el.addClass('frame1')
        $el.removeClass('frame2')
        $el.removeClass('frame3')
        $el.removeClass('frame4')
        $el.removeClass('frame5')
        $el.removeClass('frame6')
        $el.removeClass('frame7')
        $el.removeClass('frame8')
        $el.removeClass('frame9')
    }

    const isFinished = () => {
        if($el.is('.frame9')) {
            return true
        }
        return false
    }

    return {
        nextFrame: nextFrame,
        reset: reset,
        isFinished: isFinished
    }
}