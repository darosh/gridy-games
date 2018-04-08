export function roundedHull (points) {
  let path = ''
  const rel = relFactory(points)
  const di = diameter(points) * 0.2

  for (let i = 0; i < points.length; i++) {
    if (dist(rel(i - 1), rel(i)) < di && dist(rel(i), rel(i + 1)) < di) {
      points.splice(i, 1)
      i--
    }
  }

  for (let i = 0; i < points.length; i++) {
    if (i === 0) {
      path += 'M'
      path += serialize(points[i])
    } else if (dist(rel(i - 1), rel(i)) > di) {
      path += 'L'
      path += serialize(points[i])
    } else {
      const p = round(rel(i - 2), rel(i - 1), rel(i), rel(i + 1))
      path += 'C'
      path += serialize(p)
    }
  }

  path += 'Z'

  return path
}

function serialize (points) {
  return points.map((p) => p.toFixed(3)).join(',')
}

function relFactory (points) {
  return function (index) {
    if (index < 0) {
      return points[points.length + index]
    } else {
      return points[index % points.length]
    }
  }
}

function dist (a, c) {
  return Math.sqrt(Math.pow(c[1] - a[1], 2) + Math.pow(c[0] - a[0], 2))
}

function round (a, b, c, d) {
  const cr = cross(a, b, c, d)

  return [cr[0], cr[1], cr[0], cr[1], c[0], c[1]]
}

function diameter (points) {
  const xs = points.map((p) => p[0])
  const ys = points.map((p) => p[1])

  const xMin = Math.min.apply(null, xs)
  const xMax = Math.max.apply(null, xs)
  const yMin = Math.min.apply(null, ys)
  const yMax = Math.max.apply(null, ys)

  return dist([xMin, yMin], [xMax, yMax])
}

function cross (xy1, xy2, xy3, xy4) {
  const x1 = xy1[0]
  const y1 = xy1[1]
  const x2 = xy2[0]
  const y2 = xy2[1]
  const x3 = xy3[0]
  const y3 = xy3[1]
  const x4 = xy4[0]
  const y4 = xy4[1]

  // https://en.wikipedia.org/wiki/Line%E2%80%93line_intersection#Given_two_points_on_each_line
  return [
    ((x1 * y2 - y1 * x2) * (x3 - x4) - (x1 - x2) * (x3 * y4 - y3 * x4)) / ((x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4)),
    ((x1 * y2 - y1 * x2) * (y3 - y4) - (y1 - y2) * (x3 * y4 - y3 * x4)) / ((x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4))
  ]
}

export function simpleHull (points) {
  const di = diameter(points) * 0.001
  const rel = relFactory(points)

  for (let i = 0; i < points.length; i++) {
    const p1 = rel(i - 1)
    const p0 = rel(i)
    const p2 = rel(i + 1)

    const x1 = p1[0]
    const y1 = p1[1]
    const x2 = p2[0]
    const y2 = p2[1]
    const x0 = p0[0]
    const y0 = p0[1]

    // https://en.wikipedia.org/wiki/Distance_from_a_point_to_a_line#Line_defined_by_two_points
    const d = Math.abs((y2 - y1) * x0 - (x2 - x1) * y0 + x2 * y1 - y2 * x1) / Math.sqrt(Math.pow(y2 - y1, 2) + Math.pow(x2 - x1, 2))

    if (d < di) {
      points.splice(i, 1)
      i--
    }
  }

  return points
}
