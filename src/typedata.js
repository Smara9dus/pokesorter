export const normal_pure = [19, 29, 52, 53, 108, 113, 115, 128, 132, 133, 137, 143, 161, 162, 190, 206, 216, 217, 233, 234, 235, 241, 242, 263, 264, 287, 288, 289, 293, 294, 295, 300, 301, 327, 335, 351, 352, 399, 424, 427, 428, 431, 432, 440, 446, 463, 474, 486, 493, 504, 505, 506, 507, 508, 531, 572, 573, 626, 659, 676, 734, 735, 772, 773, 775, 819, 820, 831, 832];
export const normal_primary = [16, 17, 18, 21, 22, 39, 40, 83, 84, 85, 163, 164, 174, 203, 276, 277, 298, 333, 396, 397, 398, 400, 428, 441, 519, 520, 521, 585, 586, 627, 628, 648, 660, 661, 731, 732, 733, 759, 760, 765, 780];
export const normal_secondary = [19, 20, 263, 264, 667, 668, 694, 695, 862, 876];
export const normal_all = [...new Set([...normal_pure, ...normal_primary, ...normal_secondary])];

export const fighting_pure = [56, 57, 66, 67, 68, 83, 106, 107, 236, 237, 296, 297, 447, 532, 533, 534, 538, 539, 619, 620, 674, 739, 766, 852, 853, 865, 870, 889, 891];
export const fighting_primary = [307, 308, 448, 675, 701, 740, 802, 892];
export const fighting_secondary = [62, 214, 256, 257, 286, 391, 392, 453, 454, 475, 499, 500, 559, 560, 638, 639, 640, 647, 652, 759, 760, 783, 784, 794, 795];
export const fighting_all = [...new Set([...fighting_pure, ...fighting_primary, ...fighting_secondary])];

export const flying_pure = [641, 821, 822];
export const flying_primary = [714, 715, 823, 845];
export const flying_secondary = [6, 12, 16, 17, 18, 21, 22, 41, 42, 83, 84, 85, 123, 127, 130, 142, 144, 145, 146, 149, 163, 164, 165, 166, 169, 176, 177, 178, 187, 188, 189, 193, 198, 207, 225, 226, 227, 249, 250, 267, 276, 277, 278, 279, 284, 291, 333, 334, 357, 373, 384, 396, 397, 398, 414, 415, 416, 425, 426, 430, 441, 458, 468, 469, 472, 519, 520, 521, 527, 528, 561, 566, 567, 580, 581, 587, 627, 628, 629, 630, 642, 645, 661, 662, 663, 666, 701, 717, 722, 723, 731, 732, 733, 741, 774, 797];
export const flying_all = [...new Set([...flying_pure, ...flying_primary, ...flying_secondary])];

export const poison_pure = [23, 24, 29, 30, 32, 33, 88, 89, 109, 110, 316, 317, 336, 568, 569, 803];
export const poison_primary = [31, 34, 41, 42, 80, 169, 434, 435, 451, 452, 453, 454, 690, 691, 747, 748, 757, 758, 804, 890];
export const poison_secondary = [1, 2, 3, 13, 14, 15, 43, 44, 45, 48, 49, 69, 70, 71, 72, 73, 92, 93, 94, 167, 168, 211, 269, 315, 406, 407, 543, 544, 545, 590, 591, 793, 848, 849];
export const poison_all = [...new Set([...poison_pure, ...poison_primary, ...poison_secondary])];

export const ground_pure = [27, 28, 50, 51, 104, 105, 231, 232, 328, 383, 449, 450, 529, 749, 750, 843, 844];
export const ground_primary = [111, 112, 207, 329, 330, 343, 344, 464, 472, 530, 551, 552, 553, 618, 622, 623, 645, 867];
export const ground_secondary = [31, 34, 74, 75, 76, 95, 194, 195, 208, 220, 221, 246, 247, 259, 260, 290, 322, 323, 339, 340, 389, 423, 443, 444, 445, 473, 536, 537, 660, 718, 769, 770];
export const ground_all = [...new Set([...ground_pure, ...ground_primary, ...ground_secondary])];

export const rock_pure = [185, 299, 377, 408, 409, 438, 524, 525, 526, 744, 745, 837, 874];
export const rock_primary = [74, 75, 76, 95, 138, 139, 140, 141, 142, 246, 247, 248, 337, 338, 345, 346, 347, 348, 410, 411, 476, 566, 567, 639, 688, 689, 696, 697, 698, 703, 719, 774, 793, 805, 838, 839];
export const rock_secondary = [111, 112, 213, 219, 222, 304, 305, 306, 369, 464, 557, 558, 564, 565, 834];
export const rock_all = [...new Set([...rock_pure, ...rock_primary, ...rock_secondary])];

export const bug_pure = [10, 11, 127, 204, 265, 266, 268, 313, 314, 401, 402, 412, 588, 616, 617, 664, 665, 736, 824];
export const bug_primary = [12, 13, 14, 15, 46, 47, 48, 49, 123, 165, 166, 167, 168, 193, 205, 212, 213, 214, 267, 269, 283, 284, 290, 291, 292, 413, 414, 415, 416, 469, 540, 541, 542, 543, 544, 545, 557, 558, 589, 595, 596, 632, 636, 649, 666, 737, 738, 742, 743, 767, 768, 794, 795, 825, 826];
export const bug_secondary = [347, 348, 451, 751, 752, 850, 851, 872, 873];
export const bug_all = [...new Set([...bug_pure, ...bug_primary, ...bug_secondary])];

export const ghost_pure = [200, 353, 354, 355, 356, 429, 477, 562, 563, 854, 855, 864, 897];
export const ghost_primary = [92, 93, 94, 425, 426, 442, 487, 607, 608, 609, 708, 709, 710, 711, 741, 769, 770, 778, 781];
export const ghost_secondary = [292, 302, 478, 479, 592, 593, 622, 623, 679, 680, 681, 720, 724, 792, 802, 806, 867, 885, 886, 887];
export const ghost_all = [...new Set([...ghost_pure, ...ghost_primary, ...ghost_secondary])];

export const steel_pure = [379, 599, 600, 601, 808, 809, 878, 879];
export const steel_primary = [208, 227, 303, 304, 305, 306, 374, 375, 376, 385, 436, 437, 483, 638, 679, 680, 681, 707, 797, 801, 894];
export const steel_secondary = [81, 82, 205, 212, 395, 410, 411, 448, 462, 476, 485, 530, 589, 597, 598, 624, 625, 632, 649, 777, 791, 798, 805, 823];
export const steel_all = [...new Set([...steel_pure, ...steel_primary, ...steel_secondary])];

export const fire_pure = [4, 5, 37, 38, 58, 59, 77, 78, 126, 136, 155, 156, 157, 218, 240, 244, 255, 324, 390, 467, 498, 513, 514, 554, 555, 631, 653, 654, 725, 726, 813, 814, 815];
export const fire_primary = [6, 146, 219, 250, 256, 257, 322, 323, 391, 392, 485, 499, 500, 655, 662, 663, 667, 668, 721, 727, 741, 776, 806, 850, 851];
export const fire_secondary = [228, 229, 383, 494, 607, 608, 609, 636, 637, 643, 757, 758, 838, 839];
export const fire_all = [...new Set([...fire_pure, ...fire_primary, ...fire_secondary])];

export const water_pure = [7, 8, 9, 54, 55, 60, 61, 86, 90, 98, 99, 116, 117, 118, 119, 120, 129, 134, 158, 159, 160,186, 223, 224, 245, 258, 320, 321, 341, 349, 350, 366, 367, 368, 370, 382, 393, 394, 418, 419, 422, 456, 457, 489, 490, 501, 502, 503, 515, 516, 535, 550, 594, 656, 657, 692, 693, 728, 729, 746, 771, 816, 817, 818, 833, 846, 847];
export const water_primary = [62, 72, 73, 79, 80, 87, 91, 121, 130, 131, 170, 171, 183, 184, 194, 195, 199, 211, 222, 226, 230, 259, 260, 270, 271, 272, 278, 279, 318, 319, 339, 340, 342, 369, 395, 423, 458, 484, 536, 537, 564, 565, 580, 581, 592, 593, 647, 658, 730, 751, 752, 779, 834, 882, 883];
export const water_secondary = [138, 139, 140, 141, 283, 363, 364, 365, 400, 688, 689, 690, 721, 747, 748, 767, 768, 845, 892];
export const water_all = [...new Set([...water_pure, ...water_primary, ...water_secondary])];

export const grass_pure = [114, 152, 153, 154, 182, 191, 192, 252, 253, 254, 273, 285, 331, 387, 388, 420, 421, 455, 465, 470, 492, 495, 496, 497, 511, 512, 548, 549, 556, 650, 651, 672, 673, 753, 754, 761, 762, 763, 810, 811, 812, 829, 830];
export const grass_primary = [1, 2, 3, 43, 44, 45, 69, 70, 71, 102, 103, 187, 188, 189, 274, 275, 286, 315, 332, 357, 389, 406, 407, 459, 460, 492, 546, 547, 590, 591, 597, 598, 640, 652, 722, 723, 724, 755, 756, 787, 798, 840, 841, 842];
export const grass_secondary = [46, 47, 251, 270, 271, 272, 345, 346, 413, 540, 541, 542, 585, 586, 708, 709, 710, 711, 781, 893, 898];
export const grass_all = [...new Set([...grass_pure, ...grass_primary, ...grass_secondary])];

export const electric_pure = [25, 26, 100, 101, 125, 135, 172, 179, 180, 181, 239, 243, 309, 310, 311, 312, 403, 404, 405, 417, 466, 522, 523, 602, 603, 604, 796, 807, 835, 836, 871, 894];
export const electric_primary = [26, 81, 82, 145, 181, 479, 587, 642, 694, 695, 702, 741, 777, 785, 848, 849, 877, 880, 881];
export const electric_secondary = [170, 171, 595, 596, 618, 644, 737, 738];
export const electric_all = [...new Set([...electric_pure, ...electric_primary, ...electric_secondary])];

export const psychic_pure = [63, 64, 65, 79, 96, 97, 150, 151, 196, 201, 202, 325, 326, 358, 360, 386, 433, 480, 481, 482, 488, 517, 518, 574, 575, 576, 577, 578, 579, 605, 606, 677, 678, 789, 790, 800, 856, 857];
export const psychic_primary = [122, 177, 178, 249, 251, 280, 281, 282, 439, 475, 494, 527, 528, 561, 720, 741, 786, 791, 792, 858, 876, 898];
export const psychic_secondary = [26, 79, 80, 102, 103, 121, 122, 124, 199, 203, 238, 307, 308, 337, 338, 343, 344, 374, 375, 376, 380, 381, 385, 436, 437, 555, 655, 686, 687, 765, 779, 825, 826, 866];
export const psychic_all = [...new Set([...psychic_pure, ...psychic_primary, ...psychic_secondary])];

export const ice_pure = [361, 362, 378, 471, 582, 583, 584, 613, 614, 615, 712, 713, 875, 896];
export const ice_primary = [124, 144, 220, 221, 225, 238, 363, 364, 365, 473, 478, 478, 872, 873];
export const ice_secondary = [87, 91, 131, 215, 459, 460, 461, 646, 678, 699, 740, 881, 883, 898];
export const ice_all = [...new Set([...ice_pure, ...ice_primary, ...ice_secondary])];

export const dragon_pure = [147, 148, 378, 372, 610, 611, 612, 621, 704, 705, 706, 895];
export const dragon_primary = [149, 334, 373, 380, 381, 384, 443, 444, 445, 643, 644, 646, 718, 783, 784, 885, 886, 887];
export const dragon_secondary = [230, 329, 330, 483, 484, 487, 633, 634, 635, 691, 696, 697, 714, 715, 776, 780, 799, 804, 840, 841, 842, 880, 882, 884, 890];
export const dragon_all = [...new Set([...dragon_pure, ...dragon_primary, ...dragon_secondary])];

export const dark_pure = [197, 261, 292, 359, 491, 509, 510, 570, 571, 827, 828];
export const dark_primary = [198, 215, 228, 229, 302, 430, 461, 559, 560, 624, 625, 629, 630, 633, 634, 635, 686, 687, 717, 799, 859, 860, 861, 862, 893];
export const dark_secondary = [88, 89, 248, 274, 275, 318, 319, 332, 342, 434, 435, 442, 452, 551, 552, 553, 658, 675, 727, 877];
export const dark_all = [...new Set([...dark_pure, ...dark_primary, ...dark_secondary])];

export const fairy_pure = [35, 36, 173, 175, 209, 210, 669, 670, 671, 682, 683, 684, 685, 700, 716, 764, 868, 869, 888];
export const fairy_primary = [176, 468];
export const fairy_secondary = [39, 40, 122, 174, 183, 184, 280, 281, 282, 298, 303, 439, 546, 547, 702, 703, 707, 719, 730, 742, 743, 755, 756, 778, 785, 786, 787, 788, 801, 858, 859, 860, 861];
export const fairy_all = [...new Set([...fairy_pure, ...fairy_primary, ...fairy_secondary])];

export function getTypeArray(type) {
    if (type === 'fighting') {
        return fighting_all;
    } else if (type === 'flying') {
        return flying_all;
    } else if (type === 'poison') {
        return poison_all;
    } else if (type === 'ground') {
        return ground_all;
    } else if (type === 'rock') {
        return rock_all;
    } else if (type === 'bug') {
        return bug_all;
    } else if (type === 'ghost') {
        return ghost_all;
    } else if (type === 'steel') {
        return steel_all;
    } else if (type === 'fire') {
        return fire_all;
    } else if (type === 'water') {
        return water_all;
    } else if (type === 'grass') {
        return grass_all;
    } else if (type === 'electric') {
        return electric_all;
    } else if (type === 'psychic') {
        return psychic_all;
    } else if (type === 'ice') {
        return ice_all;
    } else if (type === 'dragon') {
        return dragon_all;
    } else if (type === 'dark') {
        return dark_all;
    } else if (type === 'fairy') {
        return fairy_all;
    }
    return normal_all;
}
