import batteriesRepo from "../repositories/batteriesRepo.js";
import wavesRepo from "../repositories/wavesRepo.js";
import { WaveCreationData } from "../types/types.js";

async function createOne(waveCreationData: WaveCreationData) {
  const batteryForThisWaveAndSurfer = await batteriesRepo.getByIdAndSurferNumber(waveCreationData.battery, waveCreationData.surfer);
  if (batteryForThisWaveAndSurfer.length === 0) throw { type: "not found", message: "surfer not on battery" }

  await wavesRepo.create(waveCreationData.battery, waveCreationData.surfer);
}

const wavesServices = {
  createOne
}

export default wavesServices;