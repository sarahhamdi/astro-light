interface Color {
  main: {
    dyn: {
      r: boolean
      b: boolean
      g: boolean
      w: boolean
    }
    stat: {
      r: number
      b: number
      g: number
      w: number
    }
  }
}

interface StatType {
  r: number
  b: number
  g: number
  w: number
}

export const getColor = (rgba: string): Color => {
  const { r, g, b, w } = formatColor(rgba)

  return {
    main: {
      dyn: {
        r: false,
        b: false,
        g: false,
        w: false
      },
      stat: {
        r,
        b,
        g,
        w
      }
    }
  }
}

export const formatColor = (
  rgba: string = 'rgba(255, 192, 194, 1.00)'
): StatType => {
  // converts rgba to r g b w
  let [r, g, b, w] = rgba
    .replace('rgba(', '') // get rid of rgba text
    .replace(')', '')
    .split(', ') // turn to array
    .map((item) => parseInt(item, 10)) // turn to int
  w = (1 - w) * 255 // if a = 1, w = 0; if a = 0, w = 255
  return { r, g, b, w }
}
