<script setup lang="ts">
import { z } from 'zod'

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string(),
})

type LoginInput = z.infer<typeof loginSchema>

// 2️⃣ States
const form = ref<LoginInput>({ email: '', password: '' })
const errors = ref<{ email?: string, password: string }>({ email: '', password: '' })
const loading = ref(false)
const focused = ref('')

// 3️⃣ Toast
const toast = ref({
  show: false,
  message: '',
  type: 'info' as 'success' | 'info', // Par défaut info, mais utilisable aussi pour 'success'
})

// 4️⃣ Animation on mount
const container = ref<HTMLElement | null>(null)
onMounted(() => {
  nextTick(() => {
    if (container.value) {
      container.value.style.transition = 'all 0.6s cubic-bezier(.4,0,.2,1)'
      container.value.style.opacity = '1'
      container.value.style.transform = 'translateY(0)'
    }
  })
})

/**
 * Affiche un toast personnalisé
 * @param message Le message à afficher
 * @param type Le type du toast ('success' ou 'info') – affecte la couleur/style du toast
 */
function showToast(message: string, type: 'success' | 'info' = 'info'): void {
  // Correction ici : utilise bien le type passé en paramètre ! 👇
  toast.value = { show: true, message, type }
  setTimeout(() => {
    toast.value.show = false
  }, 2800)
}

// 6️⃣ Submit handler
/**
 * Valide et soumet le formulaire de login
 * - Affiche les erreurs de validation via toast + champ ciblé
 * - Appelle l'API backend pour la connexion
 * - Redirige si succès
 */
async function onSubmit() {
  // Validation du formulaire avec Zod
  const result = loginSchema.safeParse(form.value)
  if (!result.success) {
    // Réinitialise les erreurs
    errors.value = { email: '', password: '' }
    // Remplit les messages d'erreur pour chaque champ
    for (const error of result.error.errors) {
      errors.value[error.path[0] as 'email' | 'password'] = error.message
    }
    showToast('Merci de corriger les erreurs.', 'info')
    return
  }
  errors.value = { email: '', password: '' }
  loading.value = true

  try {
    // Appelle l'API proxy Nuxt → NestJS (remplace '/api/login' selon ta route réelle)
    await $fetch('/api/login', {
      method: 'POST',
      body: form.value,
      // credentials: 'include' // décommente si login par cookies
    })
    showToast('Welcome back! Redirecting to your dashboard...', 'success')
    setTimeout(() => {
      // Redirection à personnaliser
      navigateTo('me')
    }, 1200)
    // Reset form (optionnel)
    form.value.email = ''
    form.value.password = ''
  }
  catch (error: any) {
    // NestJs should return the shape { data: { message: string } }
    showToast(error?.data?.message || 'Login failed. Please check your credentials.', 'info')
  }
  finally {
    loading.value = false
  }
}

function redirectToSignup() {
  navigateTo('register')
}
</script>

<template>
  <div
    class="font-inter h-screen m-0 flex items-center justify-center items-center
  overflow-hidden relative"
  >
    <!-- Login Container -->
    <div
      ref="container"
      class="bg-white/95 backdrop-blur-xl rounded-3xl p-12 w-full max-w-[440px] shadow-glass relative z-10 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-glass-hover animate-slide-in mx-5 md:mx-0"
      :class="{ 'opacity-70 pointer-events-none': loading }"
      style="opacity: 0; transform: translateY(50px);"
    >
      <!-- Logo Section -->
      <div class="text-center mb-10">
        <div class="text-[42px] font-extrabold gradient-text mb-2 tracking-tight">
          Shiftly
        </div>
        <div class="text-bordeaux text-base font-medium opacity-80">
          Modern Task Management
        </div>
      </div>

      <!-- Login Form -->
      <form class="space-y-6" autocomplete="off" @submit.prevent="onSubmit">
        <!-- Email -->
        <div class="relative transition-transform duration-300" :class="{ '-translate-y-0.5': focused === 'email' }">
          <label for="email" class="block mb-2 text-bordeaux font-semibold text-sm uppercase tracking-wider">Email</label>
          <input
            id="email"
            v-model="form.email"
            type="email"
            name="email"
            class="w-full px-5 py-4 border-2 border-violet/20 rounded-xl text-base bg-beige-clair/10 transition-all duration-300 outline-none text-bordeaux placeholder-bordeaux/50 focus:border-rose-vif focus:bg-beige-clair/20 focus:-translate-y-0.5 focus:shadow-input-focus"
            placeholder="Enter your email address"
            autocomplete="username"
            @focus="focused = 'email'"
            @blur="focused = ''"
          >
          <p v-if="errors.email" class="mt-1 text-xs text-red-600">
            {{ errors.email }}
          </p>
        </div>

        <!-- Password -->
        <div class="relative transition-transform duration-300" :class="{ '-translate-y-0.5': focused === 'password' }">
          <label for="password" class="block mb-2 text-bordeaux font-semibold text-sm uppercase tracking-wider">Password</label>
          <input
            id="password"
            v-model="form.password"
            type="password"
            name="password"
            class="w-full px-5 py-4 border-2 border-violet/20 rounded-xl text-base bg-beige-clair/10 transition-all duration-300 outline-none text-bordeaux placeholder-bordeaux/50 focus:border-rose-vif focus:bg-beige-clair/20 focus:-translate-y-0.5 focus:shadow-input-focus"
            placeholder="Enter your password"
            autocomplete="current-password"
            @focus="focused = 'password'"
            @blur="focused = ''"
          >
          <p v-if="errors.password" class="mt-1 text-xs text-red-600">
            {{ errors.password }}
          </p>
        </div>

        <button
          type="submit"
          :disabled="loading"
          class="btn btn-primary w-full py-[18px]
            bg-gradient-to-r from-rose-vif to-violet text-white border-none
            rounded-xl text-base font-bold cursor-pointer transition-all duration-300
            uppercase tracking-widest relative overflow-hidden shimmer-effect
            hover:-translate-y-1 hover:shadow-button-hover active:-translate-y-0.5"
        >
          <span v-if="!loading">Sign In</span>
          <span v-else>Signing In...</span>
        </button>
      </form>

      <!-- Forgot Password -->
      <div class="text-center mt-6">
        <a
          href="#"
          class="text-violet no-underline font-semibold text-sm transition-all duration-300 underline-effect hover:text-rose-vif"
          @click.prevent="showToast('Password reset link sent to your email!')"
        >
          Forgot your password?
        </a>
      </div>

      <!-- Divider -->
      <div class="text-center my-8 relative text-bordeaux/60 text-sm">
        <div class="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet/30 to-transparent" />
        <span class="bg-white/95 px-5 relative z-10">New to Shiftly?</span>
      </div>

      <!-- Signup Link -->
      <div class="text-center mt-8 pt-6 border-t border-violet/20 text-bordeaux/70 text-sm">
        Don't have an account?
        <a
          href="#"
          class="text-rose-vif font-bold no-underline transition-all duration-300 hover:text-violet"
          @click.prevent="redirectToSignup"
        >
          Create Account
        </a>
      </div>
    </div>

    <!-- Custom Toast -->
    <transition name="slide-toast">
      <div
        v-if="toast.show"
        :class="`fixed bottom-8 right-8 bg-[#FF9B45] text-white px-6 py-4 rounded-xl font-semibold z-[1000] backdrop-blur-sm shadow-2xl
         ${toast.type === 'success'
           ? 'bg-gradient-to-r from-rose-vif to-violet'
           : 'bg-bordeaux/95'
        }`"
        style="min-width:200px;"
      >
        {{ toast.message }}
      </div>
    </transition>
  </div>
</template>

<style scoped>
.gradient-text {
  background: linear-gradient(135deg, #f11a7b, #982176);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
.shimmer-effect::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
  transition: left 0.5s ease;
}
.shimmer-effect:hover::before {
  left: 100%;
}
.underline-effect {
  position: relative;
}
.underline-effect::after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  bottom: -2px;
  left: 50%;
  background: #f11a7b;
  transition: all 0.3s ease;
}
.underline-effect:hover::after {
  width: 100%;
  left: 0;
}
.slide-toast-enter-active,
.slide-toast-leave-active {
  transition:
    transform 0.3s,
    opacity 0.3s;
}
.slide-toast-enter-from,
.slide-toast-leave-to {
  transform: translateX(80px);
  opacity: 0;
}
.slide-toast-enter-to,
.slide-toast-leave-from {
  transform: translateX(0);
  opacity: 1;
}
</style>
