import { PublicationCategory, type Publication, type PublicationPageContent } from "../lib/types";
import visualConceptPageContent from "./page-publications/visual-concept-driven-image-generation.json";
import makeAStoryPageContent from "./page-publications/make-a-story.json";
import tribertPageContent from "./page-publications/tribert.json";
import weaklySupervisedAudioVisualPageContent from "./page-publications/weakly-supervised-audio-visual.json";
import improvedAttentionVQAPageContent from "./page-publications/an-improved-attention-for-visual-question-answering.json";
import watchListenAndTellPageContent from "./page-publications/watch-listen-and-tell.json";
import videoBasedPersonReIdentificationPageContent from "./page-publications/video-based-person-re-identification.json";
import convolutionalTemporalAttentionModelPageContent from "./page-publications/convolutional-temporal-attention-model.json";
import personReIdentificationPageContent from "./page-publications/person-re-identification-by-localizing-discriminative-regions.json";

export const publications: Publication[] = [
  {
    id: "all-in-one",
    title: "All in One: A Unified Synthetic Data Pipeline for Multimodal Video Understanding",
    authors: "Tanzila Rahman, Renjie Liao, Leonid Sigal",
    venue: "UBC, Vector Institute for AI",
    venueShort: "UBC",
    year: 2026,
    category: PublicationCategory.MultimodalLearning,
    image: "images/All-in-One.png",
    links: {
      arXiv: "https://arxiv.org/abs/2604.12335",
    },
  },
  {
    id: "to-sink-or-not-to-sink",
    title:
      "To Sink or Not to Sink: Visual Information Pathways in Large Vision-Language Models",
    authors:
      "Jiayun Luo, Wan-Cyuan Fan, Lyuyang Wang, Xiangteng He, Tanzila Rahman, Purang Abolmaesumi, Leonid Sigal",
    venue: "International Conference on Learning Representations",
    venueShort: "ICLR",
    year: 2025,
    category: PublicationCategory.VisionLanguage,
    image: "images/To-Sink-or-Not-to-Sink.png",
    links: {
      arXiv: "https://arxiv.org/abs/2510.08510",
    },
  },
  {
    id: "mmfactory",
    title: "MMFactory: A Universal Solution Search Engine for Vision-Language Tasks. (under review)",
    authors: "Wan-Cyuan Fan, Tanzila Rahman, Leonid Sigal",
    venue: "UBC, Vector Institute for AI, CIFAR AI Chair",
    venueShort: "UBC",
    year: 2025,
    category: PublicationCategory.VisionLanguage,
    image: "images/MMFactory.png",
    links: {
      Project: "https://davidhalladay.github.io/mmfactory_demo/",
    },
  },
  {
    id: "visual-concept-driven-image-generation",
    title: "Visual Concept-driven Image Generation with Text-to-Image Diffusion Model",
    authors: "Tanzila Rahman, Shweta Mahajan, Hsin-Ying Lee, Jian Ren, Sergey Tulyakov, Leonid Sigal",
    venue: "Conference on Robot Vision",
    venueShort: "CRV",
    year: 2025,
    category: PublicationCategory.GenerativeAI,
    image: "images/visual-concept.png",
    links: {
      arXiv: "https://arxiv.org/abs/2402.11487",
    },
    pageContent: visualConceptPageContent as PublicationPageContent,
  },
  {
    id: "prompting-hard-or-hardly-prompting",
    title:
      "Prompting Hard or Hardly Prompting: Prompt Inversion for Text-to-Image Diffusion Models",
    authors: "Shweta Mahajan, Tanzila Rahman, Kwang Moo Yi, Leonid Sigal",
    venue: "Conference on Computer Vision and Pattern Recognition",
    venueShort: "CVPR",
    year: 2024,
    category: PublicationCategory.GenerativeAI,
    image: "https://s-mahajan.github.io/images/ph2p_2023.png",
    links: {
      PDF: "https://openaccess.thecvf.com/content/CVPR2024/papers/Mahajan_Prompting_Hard_or_Hardly_Prompting_Prompt_Inversion_for_Text-to-Image_Diffusion_CVPR_2024_paper.pdf",
    },
  },
  {
    id: "make-a-story",
    title:
      "Make-A-Story: Visual Memory Conditioned Consistent Story Generation",
    authors:
      "Tanzila Rahman, Hsin-Ying Lee, Jian Ren, Sergey Tulyakov, Shweta Mahajan, Leonid Sigal",
    venue: "Conference on Computer Vision and Pattern Recognition",
    venueShort: "CVPR",
    year: 2023,
    category: PublicationCategory.GenerativeAI,
    image: "https://s-mahajan.github.io/images/cvpr_2023.png",
    links: {
      PDF: "https://openaccess.thecvf.com/content/CVPR2023/papers/Rahman_Make-a-Story_Visual_Memory_Conditioned_Consistent_Story_Generation_CVPR_2023_paper.pdf",
      Video: "https://www.youtube.com/watch?v=BXZ7LAg1sP8&t=58s",
    },
    pageContent: makeAStoryPageContent as PublicationPageContent,
  },
  {
    id: "tribert",
    title: "TriBERT: Human-centric Audio-visual Representation Learning",
    authors: "Tanzila Rahman, Mengyu Yang, Leonid Sigal",
    venue: "Neural Information Processing Systems",
    venueShort: "NeurIPS",
    year: 2021,
    category: PublicationCategory.MultimodalLearning,
    image: "images/TriBERT.png",
    links: {
      arXiv: "https://arxiv.org/abs/2110.13412",
    },
    pageContent: tribertPageContent as PublicationPageContent,
  },
  {
    id: "weakly-supervised-audio-visual",
    title:
      "Weakly-Supervised Audio-Visual Sound Source Detection and Separation",
    authors: "Tanzila Rahman, Leonid Sigal",
    venue: "IEEE International Conference on Multimedia and Expo",
    venueShort: "ICME (Oral presentation)",
    year: 2021,
    category: PublicationCategory.MultimodalLearning,
    image: "images/Weakly-Supervised.png",
    links: {
      arXiv: "https://arxiv.org/abs/2104.02606",
      Video: "https://www.youtube.com/watch?v=ep6vLty85NU",
    },
    pageContent: weaklySupervisedAudioVisualPageContent as PublicationPageContent,
  },
  {
    id: "an-improved-attention-for-visual-question-answering",
    title: "An Improved Attention for Visual Question Answering",
    authors: "Tanzila Rahman, Shih-Han Chou, Leonid Sigal, Giuseppe Carenini",
    venue: "4th Multimodal Learning and Applications Workshop (in conjunction with CVPR)",
    venueShort: "CVPR Workshop",
    year: 2021,
    category: PublicationCategory.VisionLanguage,
    image: "images/Visual-Question-Answering.png",
    links: {
      PDF: "https://openaccess.thecvf.com/content/CVPR2021W/MULA/papers/Rahman_An_Improved_Attention_for_Visual_Question_Answering_CVPRW_2021_paper.pdf",
      Video: "https://www.youtube.com/watch?v=5XfwBAxL9SQ",
    },
    pageContent: improvedAttentionVQAPageContent as PublicationPageContent,
  },
  {
    id: "watch-listen-and-tell",
    title:
      "Watch, Listen and Tell: Multi-modal Weakly Supervised Dense Event Captioning",
    authors: "Tanzila Rahman, Bicheng Xu, Leonid Sigal",
    venue: "IEEE/CVF International Conference on Computer Vision",
    venueShort: "ICCV",
    year: 2019,
    category: PublicationCategory.MultimodalLearning,
    image: "images/Watch-Listen-and-Tell.png",
    links: {
      arXiv: "https://arxiv.org/abs/1909.09944",
    },
    pageContent: watchListenAndTellPageContent as PublicationPageContent,
  },
  {
    id: "video-based-person-re-identification",
    title:
      "Video-based Person Re-identification using Refined Attention Networks",
    authors: "Tanzila Rahman, Mrigank Rochan, Yang Wang",
    venue: "IEEE International Conference on Advanced Video and Signal-based Surveillance",
    venueShort: "AVSS",
    year: 2019,
    category: PublicationCategory.ComputerVision,
    image: "images/Video-based-Person-Re-identification.png",
    links: {
      PDF: "https://www.cs.umanitoba.ca/~ywang/papers/avss19_refine.pdf",
    },
    pageContent: videoBasedPersonReIdentificationPageContent as PublicationPageContent,
  },
  {
    id: "non-local-attentive-temporal-network",
    title:
    "Non-local Attentive Temporal Network for Video-Based Person Re-identification",
    authors: "Shuangqun Rao, Pengfei Cao, Tanzila Rahman, Mrigank Rochan, Yang Wang",
    venue: "IEEE International Conference on Advanced Video and Signal-based Surveillance",
    venueShort: "AVSS",
    year: 2019,
    category: PublicationCategory.ComputerVision,
    image: "images/Non-local-Attentive.png",
    links: {
      PDF: "https://www.cs.umanitoba.ca/~ywang/papers/avss19_nonlocal.pdf"
    },
  },
  {
    id: "convolutional-temporal-attention-model",
    title: "Convolutional Temporal Attention Model for Video-Based Person Re-identification",
    authors: "Tanzila Rahman, Mrigank Rochan, Yang Wang",
    venue: "IEEE International Conference on Multimedia and Expo",
    venueShort: "ICME",
    year: 2019,
    category: PublicationCategory.ComputerVision,
    image: "https://mrochan.github.io/images/icme19_img.png",
    links: {
      arXiv: "https://arxiv.org/abs/1904.04492",
    },
    pageContent: convolutionalTemporalAttentionModelPageContent as PublicationPageContent,
  },
  {
    id: "membership-inference-attack",
    title:
      "Membership Inference Attack against Differentially Private Deep Learning Model",
    authors:
      "Md Atiqur Rahman, Tanzila Rahman, Robert Laganière, Noman Mohammed, Yang Wang",
    venue: "Transactions on Data Privacy (61-79)",
    venueShort: "TDP",
    year: 2018,
    category: PublicationCategory.MachineLearning,
    image: "images/Membership-Inference-Attack.png",
    links: {
      PDF: "http://www.tdp.cat/issues16/tdp.a289a17.pdf",
    },
  },
  {
    id: "person-re-identification-by-localizing-discriminative-regions",
    title: "Person Re-Identification by Localizing Discriminative Regions",
    authors: "Tanzila Rahman, Mrigank Rochan, Yang Wang",
    venue: "The 28th British Machine Vision Conference",
    venueShort: "BMVC",
    year: 2017,
    category: PublicationCategory.ComputerVision,
    image: "https://mrochan.github.io/images/bmvc17_personid_img.png",
    links: {
      PDF: "http://www.cs.umanitoba.ca/~ywang/papers/bmvc17_personid.pdf",
    },
    pageContent: personReIdentificationPageContent as PublicationPageContent,
  },
];

export const publicationCategories = [
  "All",
  PublicationCategory.GenerativeAI,
  PublicationCategory.MultimodalLearning,
  PublicationCategory.VisionLanguage,
  PublicationCategory.ComputerVision,
  PublicationCategory.MachineLearning,
  PublicationCategory.Other,
];
