'use client';

import { useState, useEffect } from 'react';
import {
  Bars3Icon,
  XMarkIcon,
  RocketLaunchIcon,
  ClipboardDocumentListIcon,
  UserGroupIcon,
  AcademicCapIcon,
  TrophyIcon,
  HeartIcon,
  SparklesIcon,
  BookOpenIcon,
  MicrophoneIcon,
  MusicalNoteIcon,
  BoltIcon,
  BriefcaseIcon,
  HandRaisedIcon,
  EyeIcon,
  FlagIcon,
  MapPinIcon,
  EnvelopeIcon,
  PhoneIcon,
  PaperAirplaneIcon,
  ArrowRightIcon,
  CalendarDaysIcon,
  PhotoIcon,
  PlayCircleIcon,
  CheckCircleIcon,
  StarIcon,
} from '@heroicons/react/24/outline';

import {
  SparklesIcon as SparklesSolid,
  HeartIcon as HeartSolid,
  StarIcon as StarSolid,
} from '@heroicons/react/24/solid';

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* ==================== NAVBAR ==================== */}
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <a href="#" className="nav-brand">
            <div className="nav-logo">HIMK</div>
            <div className="nav-title">
              <span>HIMK TPI-B</span>
              <span>Himpunan Mahasiswa Kundur</span>
            </div>
          </a>

          <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
            <li><a href="#beranda">Beranda</a></li>
            <li><a href="#tentang">Tentang</a></li>
            <li><a href="#visi-misi">Visi & Misi</a></li>
            <li><a href="#program">Program</a></li>
            <li><a href="#berita">Berita</a></li>
            <li><a href="#galeri">Galeri</a></li>
            <li><a href="#kontak" className="nav-cta">Hubungi Kami</a></li>
          </ul>

          <div className="nav-toggle" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <XMarkIcon className="nav-toggle-icon" />
            ) : (
              <Bars3Icon className="nav-toggle-icon" />
            )}
          </div>
        </div>
      </nav>

      {/* ==================== HERO SECTION ==================== */}
      <section id="beranda" className="hero">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="hero-badge-dot"></span>
            <span>Organisasi Mahasiswa Rantau</span>
          </div>

          <h1>
            Bersatu Membangun<br />
            <span>Generasi Kundur</span><br />
            yang Berprestasi
          </h1>

          <p className="hero-description">
            Himpunan Mahasiswa Kundur Tanjungpinang-Bintan (HIMK TPI-B) adalah wadah
            silaturahmi dan pengembangan potensi mahasiswa asal Kundur yang menempuh
            pendidikan di Tanjungpinang dan Bintan.
          </p>

          <div className="hero-buttons">
            <a href="#tentang" className="btn btn-primary">
              <RocketLaunchIcon className="btn-icon" />
              Kenali Kami
            </a>
            <a href="#program" className="btn btn-secondary">
              <ClipboardDocumentListIcon className="btn-icon" />
              Lihat Program
            </a>
          </div>

          <div className="hero-stats">
            <div className="hero-stat">
              <div className="hero-stat-number">150+</div>
              <div className="hero-stat-label">Anggota Aktif</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-number">5+</div>
              <div className="hero-stat-label">Tahun Berdiri</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-number">20+</div>
              <div className="hero-stat-label">Program Terlaksana</div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== TENTANG SECTION ==================== */}
      <section id="tentang" className="section about">
        <div className="section-container">
          <div className="about-grid">
            <div className="about-image">
              <div className="about-image-main">
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <AcademicCapIcon className="about-main-icon" />
                </div>
              </div>
              <div className="about-image-decoration top-right">
                <div className="decoration-number">2019</div>
                <div className="decoration-text">Tahun Berdiri</div>
              </div>
              <div className="about-image-decoration bottom-left">
                <TrophyIcon className="decoration-icon-svg" />
                <div className="decoration-text">Organisasi Terbaik</div>
              </div>
            </div>

            <div className="about-content">
              <h2>
                Tentang <span>HIMK TPI-B</span>
              </h2>
              <p>
                Himpunan Mahasiswa Kundur Tanjungpinang-Bintan (HIMK TPI-B) merupakan
                organisasi kemahasiswaan yang mewadahi para mahasiswa asal Kecamatan
                Kundur, Kabupaten Karimun yang sedang menempuh pendidikan di wilayah
                Tanjungpinang dan Bintan.
              </p>
              <p>
                Didirikan dengan semangat kebersamaan dan kepedulian, HIMK TPI-B hadir
                sebagai rumah kedua bagi para mahasiswa rantau untuk saling mendukung,
                berbagi pengalaman, dan mengembangkan potensi diri.
              </p>

              <div className="about-features">
                <div className="about-feature">
                  <div className="about-feature-icon">
                    <UserGroupIcon className="feature-icon-svg" />
                  </div>
                  <span>Silaturahmi Kuat</span>
                </div>
                <div className="about-feature">
                  <div className="about-feature-icon">
                    <BookOpenIcon className="feature-icon-svg" />
                  </div>
                  <span>Edukasi Berkualitas</span>
                </div>
                <div className="about-feature">
                  <div className="about-feature-icon">
                    <FlagIcon className="feature-icon-svg" />
                  </div>
                  <span>Pengembangan Diri</span>
                </div>
                <div className="about-feature">
                  <div className="about-feature-icon">
                    <HandRaisedIcon className="feature-icon-svg" />
                  </div>
                  <span>Semangat Gotong Royong</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== VISI MISI SECTION ==================== */}
      <section id="visi-misi" className="section vision-mission">
        <div className="section-container">
          <div className="section-header">
            <span className="section-label">Visi & Misi</span>
            <h2 className="section-title">Arah dan Tujuan Kami</h2>
            <p className="section-description">
              Landasan yang menjadi panduan dalam setiap langkah dan program organisasi
            </p>
          </div>

          <div className="vm-grid">
            <div className="vm-card">
              <div className="vm-icon">
                <EyeIcon className="vm-icon-svg" />
              </div>
              <h3>Visi</h3>
              <p>
                Menjadi organisasi mahasiswa daerah yang unggul, berdaya saing, dan
                berperan aktif dalam membangun generasi muda Kundur yang berilmu,
                berakhlak mulia, serta memberikan kontribusi positif bagi masyarakat
                dan bangsa.
              </p>
            </div>

            <div className="vm-card">
              <div className="vm-icon">
                <FlagIcon className="vm-icon-svg" />
              </div>
              <h3>Misi</h3>
              <ul>
                <li>Mempererat tali silaturahmi antar mahasiswa Kundur di perantauan</li>
                <li>Mengembangkan potensi akademik dan non-akademik anggota</li>
                <li>Menyelenggarakan program yang bermanfaat bagi anggota dan masyarakat</li>
                <li>Membangun jaringan kerjasama dengan berbagai pihak</li>
                <li>Melestarikan nilai-nilai budaya dan kearifan lokal Kundur</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== PROGRAM SECTION ==================== */}
      <section id="program" className="section programs">
        <div className="section-container">
          <div className="section-header">
            <span className="section-label">Program Unggulan</span>
            <h2 className="section-title">Kegiatan & Inisiatif Kami</h2>
            <p className="section-description">
              Program-program berkualitas yang dirancang untuk pengembangan anggota
            </p>
          </div>

          <div className="programs-grid">
            <div className="program-card">
              <div className="program-icon">
                <BookOpenIcon className="program-icon-svg" />
              </div>
              <h3>Study Club</h3>
              <p>Program belajar bersama dan diskusi akademik untuk meningkatkan prestasi belajar mahasiswa.</p>
            </div>

            <div className="program-card">
              <div className="program-icon">
                <MicrophoneIcon className="program-icon-svg" />
              </div>
              <h3>Leadership Training</h3>
              <p>Pelatihan kepemimpinan untuk membekali anggota dengan soft skills yang dibutuhkan.</p>
            </div>

            <div className="program-card">
              <div className="program-icon">
                <MusicalNoteIcon className="program-icon-svg" />
              </div>
              <h3>Seni & Budaya</h3>
              <p>Kegiatan pelestarian dan pengembangan seni budaya khas Kundur dan Melayu.</p>
            </div>

            <div className="program-card">
              <div className="program-icon">
                <BoltIcon className="program-icon-svg" />
              </div>
              <h3>Olahraga & Rekreasi</h3>
              <p>Kegiatan olahraga bersama dan rekreasi untuk menjaga kebersamaan dan kesehatan.</p>
            </div>

            <div className="program-card">
              <div className="program-icon">
                <BriefcaseIcon className="program-icon-svg" />
              </div>
              <h3>Career Development</h3>
              <p>Seminar dan workshop pengembangan karir serta persiapan memasuki dunia kerja.</p>
            </div>

            <div className="program-card">
              <div className="program-icon">
                <HeartIcon className="program-icon-svg" />
              </div>
              <h3>Bakti Sosial</h3>
              <p>Kegiatan sosial dan pengabdian masyarakat sebagai wujud kepedulian terhadap sesama.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== BERITA SECTION ==================== */}
      <section id="berita" className="section news">
        <div className="section-container">
          <div className="section-header">
            <span className="section-label">Berita & Artikel</span>
            <h2 className="section-title">Update Terbaru</h2>
            <p className="section-description">
              Berita dan informasi terkini seputar kegiatan HIMK TPI-B
            </p>
          </div>

          <div className="news-grid">
            <div className="news-featured">
              <div className="news-featured-image">
                <span className="news-badge">
                  <SparklesSolid className="news-badge-icon" />
                  Terbaru
                </span>
              </div>
              <div className="news-featured-content">
                <span className="news-date">
                  <CalendarDaysIcon className="news-date-icon" />
                  20 Desember 2024
                </span>
                <h3>Musyawarah Besar HIMK TPI-B 2024 Sukses Digelar</h3>
                <p>
                  Musyawarah Besar tahunan HIMK TPI-B telah sukses diselenggarakan
                  dengan dihadiri oleh seluruh anggota dan alumni. Kegiatan ini
                  membahas program kerja dan pemilihan kepengurusan baru.
                </p>
                <a href="#" className="news-read-more">
                  Baca Selengkapnya
                  <ArrowRightIcon className="news-arrow-icon" />
                </a>
              </div>
            </div>

            <div className="news-list">
              <div className="news-item">
                <div className="news-item-image">
                  <BookOpenIcon className="news-item-icon" />
                </div>
                <div className="news-item-content">
                  <h4>Workshop Penulisan Karya Ilmiah</h4>
                  <p>
                    <CalendarDaysIcon className="news-date-icon-small" />
                    15 Desember 2024
                  </p>
                </div>
              </div>

              <div className="news-item">
                <div className="news-item-image">
                  <TrophyIcon className="news-item-icon" />
                </div>
                <div className="news-item-content">
                  <h4>Turnamen Futsal Antar Organisasi Daerah</h4>
                  <p>
                    <CalendarDaysIcon className="news-date-icon-small" />
                    10 Desember 2024
                  </p>
                </div>
              </div>

              <div className="news-item">
                <div className="news-item-image">
                  <HeartSolid className="news-item-icon" />
                </div>
                <div className="news-item-content">
                  <h4>Buka Puasa Bersama dan Santunan Anak Yatim</h4>
                  <p>
                    <CalendarDaysIcon className="news-date-icon-small" />
                    5 Desember 2024
                  </p>
                </div>
              </div>

              <div className="news-item">
                <div className="news-item-image">
                  <BriefcaseIcon className="news-item-icon" />
                </div>
                <div className="news-item-content">
                  <h4>Seminar Kewirausahaan Digital</h4>
                  <p>
                    <CalendarDaysIcon className="news-date-icon-small" />
                    28 November 2024
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="section-footer">
            <a href="/berita" className="btn btn-secondary">
              <ClipboardDocumentListIcon className="btn-icon" />
              Lihat Semua Berita
              <ArrowRightIcon className="btn-icon" />
            </a>
          </div>
        </div>
      </section>

      {/* ==================== GALERI SECTION ==================== */}
      <section id="galeri" className="section gallery">
        <div className="section-container">
          <div className="section-header">
            <span className="section-label">Galeri</span>
            <h2 className="section-title">Momen Kebersamaan</h2>
            <p className="section-description">
              Dokumentasi kegiatan dan momen berharga bersama HIMK TPI-B
            </p>
          </div>

          <div className="gallery-grid">
            <div className="gallery-item">
              <div className="gallery-item-bg"></div>
              <div className="gallery-overlay">
                <PhotoIcon className="gallery-icon" />
                <span>Musyawarah Besar 2024</span>
              </div>
            </div>
            <div className="gallery-item">
              <div className="gallery-item-bg" style={{ background: 'linear-gradient(135deg, #ec4899, #8b5cf6)' }}></div>
              <div className="gallery-overlay">
                <PhotoIcon className="gallery-icon" />
                <span>Perayaan HUT</span>
              </div>
            </div>
            <div className="gallery-item">
              <div className="gallery-item-bg" style={{ background: 'linear-gradient(135deg, #22c55e, #14b8a6)' }}></div>
              <div className="gallery-overlay">
                <PhotoIcon className="gallery-icon" />
                <span>Bakti Sosial</span>
              </div>
            </div>
            <div className="gallery-item">
              <div className="gallery-item-bg" style={{ background: 'linear-gradient(135deg, #f59e0b, #ef4444)' }}></div>
              <div className="gallery-overlay">
                <PhotoIcon className="gallery-icon" />
                <span>Leadership Camp</span>
              </div>
            </div>
            <div className="gallery-item">
              <div className="gallery-item-bg" style={{ background: 'linear-gradient(135deg, #3b82f6, #6366f1)' }}></div>
              <div className="gallery-overlay">
                <PhotoIcon className="gallery-icon" />
                <span>Study Club</span>
              </div>
            </div>
            <div className="gallery-item">
              <div className="gallery-item-bg" style={{ background: 'linear-gradient(135deg, #8b5cf6, #d946ef)' }}></div>
              <div className="gallery-overlay">
                <PhotoIcon className="gallery-icon" />
                <span>Olahraga Bersama</span>
              </div>
            </div>
          </div>

          <div className="section-footer">
            <a href="/galeri" className="btn btn-secondary">
              <PhotoIcon className="btn-icon" />
              Lihat Semua Galeri
              <ArrowRightIcon className="btn-icon" />
            </a>
          </div>
        </div>
      </section>

      {/* ==================== CTA SECTION ==================== */}
      <section className="cta">
        <div className="cta-container">
          <div className="cta-yell">
            <h2>HIDUP MAHASISWA!</h2>
            <h2>HIDUP MAHASISWA!</h2>
          </div>
          <div className="cta-call-response">
            <p className="cta-call">APAKABAR MAHASISWA KUNDUR?</p>
            <p className="cta-response">LUAR BIASA, SIAP JADI PEMIMPIN!</p>
          </div>
          <a href="#tentang" className="btn btn-secondary">
            <UserGroupIcon className="btn-icon" />
            Tentang HIMK TPI-B
          </a>
        </div>
      </section>

      {/* ==================== KONTAK SECTION ==================== */}
      <section id="kontak" className="section contact">
        <div className="section-container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2>Hubungi Kami</h2>
              <p>
                Ada pertanyaan atau ingin bergabung? Jangan ragu untuk menghubungi
                kami melalui kontak di bawah ini atau kirimkan pesan langsung.
              </p>

              <div className="contact-list">
                <div className="contact-item">
                  <div className="contact-icon">
                    <MapPinIcon className="contact-icon-svg" />
                  </div>
                  <div className="contact-item-content">
                    <h4>Alamat</h4>
                    <p>Tanjungpinang, Kepulauan Riau</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <EnvelopeIcon className="contact-icon-svg" />
                  </div>
                  <div className="contact-item-content">
                    <h4>Email</h4>
                    <p>himktpib@gmail.com</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <PhoneIcon className="contact-icon-svg" />
                  </div>
                  <div className="contact-item-content">
                    <h4>WhatsApp</h4>
                    <p>+62 812 3456 7890</p>
                  </div>
                </div>
              </div>

              <div className="contact-socials">
                <a href="#" className="social-link" aria-label="Facebook">
                  <svg className="social-icon-svg" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a href="#" className="social-link" aria-label="Instagram">
                  <svg className="social-icon-svg" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a href="#" className="social-link" aria-label="Twitter">
                  <svg className="social-icon-svg" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a href="#" className="social-link" aria-label="YouTube">
                  <svg className="social-icon-svg" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
              </div>
            </div>

            <form className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label>Nama Lengkap</label>
                  <input type="text" placeholder="Masukkan nama anda" />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input type="email" placeholder="Masukkan email anda" />
                </div>
              </div>

              <div className="form-group">
                <label>Subjek</label>
                <input type="text" placeholder="Subjek pesan" />
              </div>

              <div className="form-group">
                <label>Pesan</label>
                <textarea placeholder="Tulis pesan anda disini..."></textarea>
              </div>

              <button type="submit" className="btn btn-primary">
                <PaperAirplaneIcon className="btn-icon" />
                Kirim Pesan
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ==================== FOOTER ==================== */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-grid">
            <div className="footer-about">
              <div className="footer-brand">
                <div className="footer-logo">HIMK</div>
                <div className="footer-brand-text">
                  <h3>HIMK TPI-B</h3>
                  <span>Himpunan Mahasiswa Kundur</span>
                </div>
              </div>
              <p>
                Wadah silaturahmi dan pengembangan potensi mahasiswa asal Kundur
                yang menempuh pendidikan di Tanjungpinang dan Bintan.
              </p>
            </div>

            <div className="footer-column">
              <h4>Navigasi</h4>
              <ul className="footer-links">
                <li><a href="#beranda">Beranda</a></li>
                <li><a href="#tentang">Tentang Kami</a></li>
                <li><a href="#visi-misi">Visi & Misi</a></li>
                <li><a href="#program">Program</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>Kegiatan</h4>
              <ul className="footer-links">
                <li><a href="#berita">Berita</a></li>
                <li><a href="#galeri">Galeri</a></li>
                <li><a href="#">Agenda</a></li>
                <li><a href="#">Dokumentasi</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>Lainnya</h4>
              <ul className="footer-links">
                <li><a href="#">Pendaftaran</a></li>
                <li><a href="#">Alumni</a></li>
                <li><a href="#">FAQ</a></li>
                <li><a href="#kontak">Kontak</a></li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <p>© 2024 HIMK TPI-B. All rights reserved.</p>
            <div className="footer-bottom-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
