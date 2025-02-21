import { level, pos, type LevelComp, type LevelOpt, type PosComp } from "../components";
import { _k } from "../kaplay";
import { vec2 } from "../math";
import type { GameObj } from "../types.ts";

/**
 * @deprecated in favor of {@link level `level()`} component.
 */
export function addLevel(
  map: string[],
  opt: LevelOpt,
): GameObj<PosComp | LevelComp> {
    return _k.game.root.add([
        pos(opt.pos ?? vec2(0)),
        level(map, opt)
    ]);
}
