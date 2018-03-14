import { HexagonalGrid, RadialGrid, RectangularGrid } from "gridy";
import { IGridGameConstructor } from "../IGridGame";
import { initActions } from "./actions";

export const FIELDS = [
  "title",
  "type",
  "items",
  "linkText",
  "authors",
  "aliases",
  "rules",
  "created",
  "location",
  "tiles",
  "original",
  "grid",
];

const GRIDS = new Map<any, string>([
  [RectangularGrid, "Rectangular"], [HexagonalGrid, "Hexagonal"], [RadialGrid, "Radial"],
]);

function copy(name: {}): {} {
  return Object.assign({}, name);
}

function domain(link: string) {
  return (/[^.]*\.[^.]{2,3}(?:\.[^.]{2,3})?$/.exec((new URL(link)).hostname) as any)[0];
}

function id(key: string) {
  return key.replace("Game", "");
}

interface IDictionary { [k: string]: any; }
const links = ["wiki", "source"];

function merge(a: IDictionary, b: IDictionary): IDictionary {
  for (const k in a) {
    if (Array.isArray(a[k])) {
      a[k] = a[k].join(", ");
    }
  }

  const originals: IDictionary = {};

  for (const k in b) {
    if (a[k]) {
      continue;
    }

    if (Array.isArray(b[k])) {
      b[k] = b[k].join(", ");
    }

    a[k] = b[k];
    originals[k] = true;
  }

  a.originals = originals;

  links.forEach((l) => {
    if (a[l]) {
      a[`${l}Text`] = domain(a[l]);
    }
  });

  return a;
}

export function table(games: { [name: string]: IGridGameConstructor }): IDictionary[] {
  const result: IDictionary[] = [];

  for (const key of Object.keys(games)) {
    const a = games[key];
    const b = a.original ? games[a.original] : {} as IGridGameConstructor;
    const m = merge(copy(a), copy(b));
    m.id = id(key);
    m.instance = new games[key]();
    m.tiles = m.instance.grid.tiles.length;
    m.original = b.title || a.title;
    m.originals.original = !b.title;
    m.link = m.wiki || m.source;
    m.linkText = m.wikiText || m.sourceText;
    m.grid = GRIDS.get(m.instance.grid.constructor);
    initActions(m.instance, m.instance.possible());
    Object.freeze(m.instance);
    Object.freeze(m);
    result.push(m);
  }

  return result;
}
