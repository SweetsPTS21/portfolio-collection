import notebookGrid from '../../assets/kawaii-stationery/notebook-grid.svg';
import stickerSheet from '../../assets/kawaii-stationery/sticker-sheet.svg';
import washiTape from '../../assets/kawaii-stationery/washi-tape-set.svg';

export default function KawaiiBackground() {
  return (
    <div className="stationery-bg" aria-hidden="true">
      <img className="stationery-bg__grid" src={notebookGrid} alt="" />
      <img className="stationery-bg__stickers stationery-bg__stickers--one" src={stickerSheet} alt="" />
      <img className="stationery-bg__stickers stationery-bg__stickers--two" src={stickerSheet} alt="" />
      <img className="stationery-bg__tape stationery-bg__tape--one" src={washiTape} alt="" />
      <img className="stationery-bg__tape stationery-bg__tape--two" src={washiTape} alt="" />
    </div>
  );
}
