var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _a;
(_a = document.getElementById('resumeform')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    var _this = this;
    var _a, _b, _c, _d, _e, _f, _g;
    event.preventDefault();
    // Get form elements with type annotations
    var profilePictureInput = document.getElementById('profilePicture');
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var phoneElement = document.getElementById('phone');
    var educationElement = document.getElementById('education');
    var experienceElement = document.getElementById('experience');
    var skillsElement = document.getElementById('skills');
    var usernameElement = document.getElementById('username');
    // Ensure all elements are available
    if (profilePictureInput && nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement && usernameElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var skills = skillsElement.value;
        var username = usernameElement.value;
        var uniquePath_1 = "resumes/".concat(username.replace(/\s+/g, '_'), "_cv.html");
        // Picture handling
        var profilePictureFile = (_a = profilePictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
        var profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : '';
        // Create resume output
        var resumeHTML = "\n            <h2 class=\"resume-header\">Professional Resume</h2>\n<div class=\"resume-section\">\n    ".concat(profilePictureURL ? "<img src=\"".concat(profilePictureURL, "\" alt=\"Profile Picture\" class=\"profile-picture\">") : '', "\n    <div class=\"personal-info\">\n        <p><strong>Name:</strong> <span class=\"resume-name\">").concat(name_1, "</span></p>\n        <p><strong>Email:</strong> <span class=\"resume-email\">").concat(email, "</span></p>\n        <p><strong>Phone Number:</strong> <span class=\"resume-phone\">").concat(phone, "</span></p>\n    </div>\n</div>\n\n<hr class=\"resume-divider\" />\n\n<div class=\"resume-section\">\n    <h3 class=\"section-header\">Education</h3>\n    <p class=\"resume-content\">").concat(education, "</p>\n</div>\n\n<hr class=\"resume-divider\" />\n\n<div class=\"resume-section\">\n    <h3 class=\"section-header\">Experience</h3>\n    <p class=\"resume-content\">").concat(experience, "</p>\n</div>\n\n<hr class=\"resume-divider\" />\n\n<div class=\"resume-section\">\n    <h3 class=\"section-header\">Skills</h3>\n    <p class=\"resume-content\">").concat(skills, "</p>\n</div>\n\n        ");
        var resumeOutputElement_1 = document.getElementById('resumeOutput');
        if (resumeOutputElement_1) {
            resumeOutputElement_1.innerHTML = resumeHTML;
            resumeOutputElement_1.classList.remove('hidden');
        }
        // Show buttons
        (_b = document.getElementById('edit-resume')) === null || _b === void 0 ? void 0 : _b.classList.remove('hidden');
        (_c = document.getElementById('share-resume')) === null || _c === void 0 ? void 0 : _c.classList.remove('hidden');
        (_d = document.getElementById('download-resume')) === null || _d === void 0 ? void 0 : _d.classList.remove('hidden');
        // Download PDF functionality
        (_e = document.getElementById('download-resume')) === null || _e === void 0 ? void 0 : _e.addEventListener('click', function () {
            var opt = {
                margin: 0.2,
                filename: 'resume.pdf',
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: { scale: 2 },
                jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
            };
            html2pdf().from(resumeOutputElement_1).set(opt).save();
        });
        // Edit functionality
        (_f = document.getElementById('edit-resume')) === null || _f === void 0 ? void 0 : _f.addEventListener('click', function () {
            var _a, _b, _c;
            resumeOutputElement_1 === null || resumeOutputElement_1 === void 0 ? void 0 : resumeOutputElement_1.classList.add('hidden');
            (_a = document.getElementById('edit-resume')) === null || _a === void 0 ? void 0 : _a.classList.add('hidden');
            (_b = document.getElementById('share-resume')) === null || _b === void 0 ? void 0 : _b.classList.add('hidden');
            (_c = document.getElementById('download-resume')) === null || _c === void 0 ? void 0 : _c.classList.add('hidden');
        });
        // Shareable link functionality
        (_g = document.getElementById('share-resume')) === null || _g === void 0 ? void 0 : _g.addEventListener('click', function () { return __awaiter(_this, void 0, void 0, function () {
            var shareableLink, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        shareableLink = "https://yourdomain.com/".concat(uniquePath_1);
                        return [4 /*yield*/, navigator.clipboard.writeText(shareableLink)];
                    case 1:
                        _a.sent();
                        alert('Shareable link copied to clipboard!');
                        return [3 /*break*/, 3];
                    case 2:
                        err_1 = _a.sent();
                        console.error('Failed to copy link: ', err_1);
                        alert('Failed to copy link to clipboard. Please try again.');
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); });
    }
    else {
        console.error('Form elements are missing');
    }
});
