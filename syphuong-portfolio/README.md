# Syphuong Portfolio - Huong dan trien khai

Doc nay la huong dan rieng cho project `syphuong-portfolio`. Truoc khi code, can doc `../README.md` de nam quy uoc chung cua monorepo, sau do dung file nay lam contract chinh cho giao dien va cau truc cua Sy Phuong.

## 1. Muc tieu project

Xay dung portfolio hoc tap cho Nguyen Tong Sy Phuong, sinh vien nganh Luat, Truong Dai hoc Luat - Dai hoc Quoc gia Ha Noi.

Portfolio phai the hien tinh than:

- Luat x Cong nghe
- Ben bi, ky luat, chinh xac
- Khong gian ben cang/harbor, go, day thung, la ban, song bien
- Giao dien giong thiet ke chuan trong `src/assets/DESIGN.png`

## 2. Thiet ke bat buoc

File thiet ke chuan la:

```txt
src/assets/DESIGN.png
```

Khi code UI, bat buoc bam sat file nay ve:

- Bo cuc tong the
- Mau sac xanh bien nhat, xanh navy, mau go, mau giay/van go
- Typography lon, dam, phong cach hoc thuat nhung gan voi chu de hang hai
- Header co ten `Nguyen Tong Sy Phuong`, icon neo, navigation va nut go `Dock`
- Hero co nen bien/cang, hai dang ben trai, avatar nam trong khung day thung ben phai
- Section `Ve toi` nam tren bang go treo bang day
- Section `Dock Projects` gom 6 card bai tap dang bang go
- Section `Compass Skills` co la ban o giua va cac skill badge xung quanh
- Section `Tong ket` va footer co song bien, bottle/message, nen xanh dam

Khong duoc thiet ke lai theo phong cach khac. Neu responsive mobile can thay doi layout, van phai giu dung cam giac thi giac, mau sac, asset va thu tu noi dung cua thiet ke goc.

## 3. Quy tac su dung assets

Chi duoc su dung assets co san trong project nay. Khong lay anh tu internet, khong generate anh moi, khong them asset tu project khac.

Assets giao dien co san:

```txt
src/assets/DESIGN.png
src/assets/about-bg.png
src/assets/about-frame.png
src/assets/avatar-frame.png
src/assets/bottle.png
src/assets/compas.png
src/assets/conclution-bg.png
src/assets/explore-projects.png
src/assets/footer.png
src/assets/lantern.png
src/assets/law-tag.png
src/assets/project-bg.png
src/assets/project-frame.png
src/assets/skills-bg.png
src/assets/wave.png
src/assets/lantern.png
src/assets/skills-bg.png
src/assets/conclution-bg.png
```

Assets noi dung trong `docs/`:

```txt
docs/portfolio.md
docs/avatar.jpg
docs/bt1.pdf
docs/bt2.pdf
docs/bt3.pdf
docs/bt4.pdf
docs/bt5.pdf
docs/bt6.pdf
```

Ghi chu:

- `docs/avatar.jpg` la avatar that, dung trong khung `avatar-frame.png`.
- `docs/bt1.pdf` den `docs/bt6.pdf` la minh chung cho 6 bai tap.
- Co the dung Lucide icons cho icon UI nho, nhung khong duoc ve them minh hoa thay the assets chinh.
- Khong doi ten file asset neu khong cap nhat toan bo import lien quan.

## 4. Nguon noi dung

Nguon noi dung duy nhat:

```txt
docs/portfolio.md
```

Khong tu bia them thanh tich, du an, mo ta hoac thong tin ca nhan. Neu can rut gon copy cho UI, phai giu dung y va khong lam sai noi dung goc.

Du lieu can trich xuat:

- Ho va ten: `Nguyen Tong Sy Phuong`
- Nganh hoc: `Luat`
- Truong: `Truong Dai hoc Luat - Dai hoc Quoc gia Ha Noi`
- So thich: boi loi, may tinh, thiet bi cong nghe
- Phong cach: it noi, tap trung hanh dong, tich cuc, tan tam
- Muc tieu: tro thanh luat su nhay ben voi cong nghe
- 6 bai tap trong phan Projects
- Noi dung tong ket, kien thuc quan trong, diem tam dac va thach thuc

Nen tao file data rieng:

```txt
src/data/portfolioData.js
```

File nay chua object/data array cho profile, projects, skills, conclusion va duong dan PDF.

## 5. Tech stack

Bat buoc dung:

- React 18
- Vite
- Framer Motion
- Lucide React (`lucide-react`, tuong ung voi lucide-icons)

Lenh khoi tao neu project chua co source app:

```bash
cd syphuong-portfolio
npm create vite@latest . -- --template react
npm install
npm install framer-motion lucide-react
```

Project co 3 route bat buoc. Neu can thu vien routing de giu URL sach, co the them `react-router-dom`; khong them UI framework neu khong can.

## 6. Kien truc route bat buoc

Portfolio gom dung 3 route:

| Route          | Page              | Noi dung                                                                       |
| -------------- | ----------------- | ------------------------------------------------------------------------------ |
| `/about`       | `AboutPage`       | Hero, avatar, gioi thieu ban than, muc tieu, thong tin ca nhan, Compass Skills |
| `/projects`    | `ProjectsPage`    | 6 bai tap, mo ta muc tieu/quy trinh, link mo PDF minh chung                    |
| `/conclutions` | `ConclutionsPage` | Tong ket, kien thuc noi bat, diem tam dac, thach thuc, footer/contact          |

Giu dung slug `/conclutions` theo yeu cau project. Neu can route mac dinh, redirect `/` ve `/about`.

Khong tao them route `/skills`, `/contact` hoac `/home`. Cac nhan `Skills` va `Contact` neu xuat hien tren UI chi la anchor/scroll target noi bo trong 3 route tren, khong phai route rieng.

## 7. Cau truc source de xuat

```txt
syphuong-portfolio/
├── README.md
├── index.html
├── package.json
├── vite.config.js
├── docs/
│   ├── portfolio.md
│   ├── avatar.jpg
│   └── bt1.pdf ... bt6.pdf
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    ├── assets/
    │   └── DESIGN.png + cac asset da co
    ├── data/
    │   └── portfolioData.js
    ├── pages/
    │   ├── AboutPage.jsx
    │   ├── ProjectsPage.jsx
    │   └── ConclutionsPage.jsx
    ├── components/
    │   ├── layout/
    │   │   ├── HarborShell.jsx
    │   │   ├── HarborNav.jsx
    │   │   └── Footer.jsx
    │   ├── about/
    │   │   ├── HeroDock.jsx
    │   │   ├── AboutBoard.jsx
    │   │   └── CompassSkills.jsx
    │   ├── projects/
    │   │   ├── ProjectDockGrid.jsx
    │   │   └── ProjectCard.jsx
    │   └── ui/
    │       ├── WoodButton.jsx
    │       ├── RopeFrame.jsx
    │       └── WaveDivider.jsx
    └── utils/
        └── assetPaths.js
```

## 8. Huong dan UI theo section

### About route

`/about` phai bam phan dau cua `DESIGN.png`:

- Full viewport hero voi `about-bg.png` lam nen.
- Header nam tren cung, chu mau navy, active nav co underline dang song.
- Avatar dung `docs/avatar.jpg`, boc trong `avatar-frame.png`.
- CTA dung phong cach bang go, co icon Lucide phu hop.
- `law-tag.png` dung cho tag `Law x Technology`.
- Bang thong tin `Ve toi` dung `about-frame.png`, sap xep cac cot nhu thiet ke.
- `CompassSkills` co the nam cuoi route nay, dung `skills-bg.png` va `compas.png`.

### Projects route

`/projects` phai bam phan `Dock Projects`:

- Nen chinh dung `project-bg.png`.
- Tieu de `Dock Projects` can giua, mau navy, co hoa tiet song nho.
- 6 project card dung `project-frame.png`, sap xep 3 cot desktop, 1 cot mobile.
- Moi card co so thu tu `01` den `06`, ten chuong, muc tieu ngan va nut/link mo PDF.
- PDF tuong ung:
    - Bai 1 -> `docs/bt1.pdf`
    - Bai 2 -> `docs/bt2.pdf`
    - Bai 3 -> `docs/bt3.pdf`
    - Bai 4 -> `docs/bt4.pdf`
    - Bai 5 -> `docs/bt5.pdf`
    - Bai 6 -> `docs/bt6.pdf`
- Khong hien placeholder neu da co PDF that.

### Conclutions route

`/conclutions` phai bam phan cuoi cua `DESIGN.png`:

- Nen/khong khi tiep tuc tu `skills-bg.png` hoac `footer.png`.
- Hien thi `Tong ket`, `Kien thuc noi bat`, `Dieu tam dac`, `Thach thuc`.
- Dung `bottle.png`, `wave.png`, `footer.png` cho khu vuc `Send from Harbor` va footer.
- Footer co ten Nguyen Tong Sy Phuong, nganh Luat va truong; khong them quote neu quote do khong co trong `docs/portfolio.md`.

## 9. Animation

Dung Framer Motion tiet che:

- Page transition fade + translateY nhe khi chuyen route.
- Card project hover nhe: translateY(-4px), shadow go, khong bounce.
- Skill badge xuat hien stagger quanh la ban.
- Header/nav transition nhanh, khong lam lech layout.
- Ton trong `prefers-reduced-motion`.

Khong dung animation phuc tap lam mat tinh chat chinh xac, ky luat cua portfolio.

## 10. Responsive

- Desktop: bam sat `DESIGN.png`, uu tien ti le rong va composition goc.
- Tablet: project grid 2 cot, about board co the xuong hang.
- Mobile: 1 cot, avatar duoi title, bang go va card co padding gon, khong de text tran khung.
- Khong crop mat/avatar.
- Text phai doc duoc, khong nam de len chi tiet quan trong cua assets.

## 11. Checklist hoan thanh

Truoc khi xem la xong, can kiem tra:

- [ ] App chay bang Vite, khong loi console nghiem trong.
- [ ] Co dung 3 route `/about`, `/projects`, `/conclutions`.
- [ ] `/` redirect ve `/about` neu co.
- [ ] Giao dien desktop bam sat `src/assets/DESIGN.png`.
- [ ] Chi dung assets co san trong `src/assets` va `docs`.
- [ ] Noi dung lay tu `docs/portfolio.md`, khong co placeholder.
- [ ] Avatar dung `docs/avatar.jpg`.
- [ ] 6 bai tap link dung den `docs/bt1.pdf` ... `docs/bt6.pdf`.
- [ ] Framer Motion chi dung cho animation tinh te, khong lam sai bo cuc.
- [ ] Lucide icons duoc dung nhat quan, stroke mong, mau navy.
- [ ] Responsive mobile khong vo layout, khong che mat chu/anh.
- [ ] `npm run build` pass.
